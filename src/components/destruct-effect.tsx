"use client";

import { useState } from "react";

const DestructEffect = () => {
  const [translate] = useState(50);

  const Item: React.FC<{ translateY: number }> = ({ translateY }) => {
    return (
      <div className="relative m-[-0.05rem] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgb(241, 241, 241)] translate-none rotate-none scale-none"
          style={{
            transform: `translate(0%, ${translateY}%);`,
          }}
          // style="position: absolute; top: 0px; left: 0px;
          // width: 100%; height: 100%;
          // background-color: rgb(241, 241, 241);
          // translate: none; rotate: none; scale: none;
          // transform: translate(0%, 110%);"
        ></div>
      </div>
    );
  };

  return (
    <div
      className="h-full w-[150vw] absolute grid grid-cols-4 grid-rows-3 top-0"
      style={{
        transform: `translateY(${translate}vh)`,
      }}
      // style="translate: none; rotate: none; scale: none;
      // grid-template-columns: repeat(4, minmax(0px, 1fr));
      // grid-template-rows: repeat(3, minmax(0px, 1fr));
      // left: 0px; top: 0px;
      // transform: translate(-180.167px) skew(-9.2deg);
      // display: grid; position: absolute;"
    >
      {Array(12)
        .fill("")
        .map((_, index) => (
          <Item key={index} translateY={50} />
        ))}
    </div>
  );
};

export default DestructEffect;
