import React from "react";
import loading from "./imgs/loading.gif";
export default function Spinner() {
  return (
    <div>
      <img
        src={loading}
        className="object-center mx-auto mb-96 object-contain my-10"
        alt=""
      />
    </div>
  );
}
