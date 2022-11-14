import React from "react";
import tlogo from "../tcss.png";

export default function Footer() {
  return (
    <>
      <footer className="px-4 py-8 bg-gray-800 text-gray-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                Made With &#9829; By Jay Prajapati Using{" "}
                <i className="fa-brands fa-react"></i>&nbsp; & &nbsp;
                <img src={tlogo} className="w-[4.5%] align-top inline" alt="" />
              </li>
              <div></div>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jayyprajapati"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jay-prajapati-614180191/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/jayy.prajapati/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
