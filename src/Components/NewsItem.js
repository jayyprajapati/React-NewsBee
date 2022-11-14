import React from "react";

export default function NewsItem(props) {
  const title = props.title ? props.title.slice(0, 80) : "Unknown";
  const desc = props.desc ? props.desc.slice(0, 100) : "Unknown";

  const dummyImage =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  return (
    <div className=" m-10 max-w-sm bg-white rounded-[30px] border border-gray-200 shadow-md dark:bg-[#E8E8E8]">
      <img
        className="rounded-t-[30px] h-[250px] w-full"
        src={props.url ? props.url : dummyImage}
        alt=""
      />
      <div className="p-5">
        <a href={props.newsURL} target="_blank" rel="noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#394867]">
            {title}...
          </h5>
        </a>
        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 mt-3">
          {props.source}
        </span>{" "}
        <br />
        <p className="my-3 divide-y font-normal text-gray-700 dark:text-[#413F42]">
          {desc}...
          <a
            href={props.newsURL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center  px-3 text-sm font-medium text-center text-[#3C4048]  hover:text-[#B2B2B2]"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            {/* Read more &rarr; */}
          </a>
        </p>
        <div className="h-[1px] bg-[#B2B2B2] my-3"></div>
        <p className="mt-4 mb-3 font-bold text-gray-500 dark:text-[#413F42]">
          By {props.author ? props.author : "Unknown"}
        </p>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
          <i className="fa-solid fa-calendar-days"></i>&nbsp;{" "}
          {new Date(props.date).toDateString()}
        </span>
        <span className=" text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <i className="fa-solid fa-clock"></i> &nbsp;&nbsp;
          <i className="fa-solid fa-bee"></i>
          <i className="fa-regular fa-burger-soda"></i>
          {new Date(props.date).toTimeString().slice(0, 5) + " IST"}
        </span>
      </div>
    </div>
  );
}
