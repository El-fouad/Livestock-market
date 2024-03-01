import React from "react";

const SlickCustomArrow = ({onclick,icon}) => {
  return (
    <div className="flex flex-col justify-center">
      <button className="" onClick={onclick}>
        {icon}
      </button>
    </div>
  );
};

export default SlickCustomArrow;
