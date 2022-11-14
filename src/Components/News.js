import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import ologo from "./ologo.png";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const PAGESIZE = props.pageSize;
  const APIKEY = props.apiKey;
  const CATEGORY = props.category;
  const COUNTRY = props.country;

  // const nextClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${APIKEY}&page=${
  //     page + 1
  //   }&pageSize=${PAGESIZE}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setLoading(false);
  //   setArticles(parsedData.articles);
  //   setPage(page + 1);
  // };

  // const prevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${APIKEY}&page=${
  //     page - 1
  //   }&pageSize=${PAGESIZE}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setLoading(false);
  //   setArticles(parsedData.articles);
  //   setPage(page - 1);
  // };

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${APIKEY}&page=${page}&pageSize=${PAGESIZE}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${CATEGORY}&apiKey=${APIKEY}&page=${
      page + 1
    }&pageSize=${PAGESIZE}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
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
      <div className="flex w-fit mx-auto mt-5">
        <img src={ologo} className="h-[200px]" alt="" />
        <h1 className="text-[36px] my-auto font-bold font-mono">
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
        <div className="grid lg:grid-cols-3 content-evenly grid-cols-1 grid-flow-row">
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
      {/* <div className="m-10 mt-3 flex justify-between">
        <button
          type="button"
          onClick={prevClick}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:cursor-not-allowed"
          disabled={page <= 1}
        >
          &larr; Prev
        </button>
        <button
          type="button"
          onClick={nextClick}
          disabled={Math.ceil(totalResults / PAGESIZE) < page + 1}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:cursor-not-allowed"
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
}
