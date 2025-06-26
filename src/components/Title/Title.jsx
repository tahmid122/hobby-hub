import React from "react";
import ShinyText from "./ShinyText";

const Title = ({ title }) => {
  return (
    <div className="text-center">
      <ShinyText>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {title}
        </h1>
      </ShinyText>
    </div>
  );
};

export default Title;
