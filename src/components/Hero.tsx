import React from "react";
import { Button } from "./ui/button";
import Grid from "./Grid";

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-24">
      <div className="text-center flex flex-col gap-5 w-1/2 lg:text-left order-1 lg:order-1">
        <h1
          className="text-3xl lg:text-6xl font-bold text-blue-950"
          style={{ color: "#130F49" }}
        >
          I Build Custom <hr className="w-0" />
          <span style={{ color: "#33A1CD" }}>Website Solutions</span>{" "}
          <hr className="w-0" /> That Help Your <hr className="w-0" />{" "}
          <span style={{ color: "#33A1CD" }}>Business Grow</span>
        </h1>
        <p>
          I may help you increase conversion and performance in every possible
          way.
        </p>
        <div className="flex gap-5">
          <Button className="bg-blue-950 px-7 py-2  text-xs lg:text-base">See my Work</Button>
          <Button className="px-7 py-2" style={{ background: "#33A1CD" }}>
            Start a Project
          </Button>
        </div>
      </div>
      <div
        className="w-72 h-72 lg:w-96 lg:h-96 rounded-tl-full rounded-br-full rounded-bl-full mt-4 lg:mt-0 lg:order-2"
        style={{ background: "#D9F4FF" }}
      />
      <Grid />
    </div>
  );
};

export default Hero;
