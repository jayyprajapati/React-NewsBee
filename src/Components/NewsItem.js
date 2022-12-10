import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function NewsItem(props) {
  const title = props.title ? props.title.slice(0, 80) : "Unknown";
  const desc = props.desc ? props.desc.slice(0, 100) : "Unknown";

  const dummyImage =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  const onEnd = () => {
    setBtnColor("fa-microphone");
    setContinueRead(false);
  };

  const { speak, cancel } = useSpeechSynthesis({ onEnd });
  const [continueRead, setContinueRead] = useState(true);
  const [btnColor, setBtnColor] = useState("fa-microphone");

  const handleOnClick = (title) => {
    if (continueRead) {
      setContinueRead(false);
      setBtnColor("fa-microphone-slash");
      speak({ text: title });
    } else {
      cancel();
      setContinueRead(true);
      setBtnColor("fa-microphone");
    }
  };
  return (
    <>
      <div className=" m-10 max-w-sm bg-white rounded-[30px] border border-gray-200 shadow-md dark:bg-[#E8E8E8]">
        <img
          className="rounded-t-[30px] h-[250px] w-full"
          src={props.url ? props.url : dummyImage}
          alt=""
        />
        <div className="p-3">
          <a
            href={props.newsURL}
            title={props.title}
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#394867]">
              {title}...
            </h5>
          </a>
          <div className="flex justify-between w-full align-middle my-5">
            <span className="bg-[#3D5656] w-fit p-1 text-white text-xs font-bold rounded dark:bg-red-200 dark:text-red-900">
              {props.source}
            </span>
            <i
              id="#micOn"
              className={`fa-solid ${btnColor} hover:scale-125  hover:cursor-pointer active:fa-microphone text-black`}
              onClick={() => {
                handleOnClick(props.title);
              }}
            ></i>
          </div>
          <p className="my-1 min-h-[70px] divide-y font-normal text-gray-700 dark:text-[#413F42]">
            {desc}...
            <a
              href={props.newsURL}
              target="_blank"
              rel="noreferrer"
              title={props.title}
              className="inline-flex items-center  px-3 text-sm font-medium text-center text-[#3C4048]  hover:text-[#B2B2B2]"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </p>
          {/* Hr line */}
          <div className="h-[1px] bg-[#B2B2B2] my-3"></div>
          {/* Hr line end */}
          <p className="mt-4 mx-4 mb-3 font-bold text-gray-500 dark:text-[#413F42]">
            By {props.author ? props.author : "Unknown"}
          </p>
          <div className="flex justify-between mx-2">
            <span className=" text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 ">
              <i className="fa-solid fa-calendar-days"></i>&nbsp;{" "}
              {new Date(props.date).toDateString()}
            </span>
            <span className=" text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              <i className="fa-solid fa-clock text-gray-600"></i> &nbsp;&nbsp;
              {new Date(props.date).toTimeString().slice(0, 5) + " IST"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
