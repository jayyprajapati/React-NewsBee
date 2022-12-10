import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import newsBeeLogo from "./whiteLogo.png";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const PAGESIZE = props.pageSize;
  const API_KEY = props.apiKey;
  const CATEGORY = props.category;
  const COUNTRY = props.country;

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}&page=${page}&pageSize=${PAGESIZE}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(70);
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}&page=${
      page + 1
    }&pageSize=${PAGESIZE}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `NewsBee - ${
      CATEGORY.charAt(0).toUpperCase() + CATEGORY.slice(1)
    }`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center space-x-6 mt-5">
        {/* <img src={newsBeeLogo} className="object-contain w-48" alt="" /> */}
        <h1 className="text-[36px] text-[#434242] my-auto ml-10 flex items-center align-middle justify-center font-bold font-workSans">
          Top {CATEGORY === "general" ? "" : CATEGORY} Headlines
        </h1>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 content-center md:content-evenly grid-cols-1 grid-flow-row">
          {articles.map((element, i) => {
            return (
              <div className="flex" key={i}>
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  url={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source["name"]}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
