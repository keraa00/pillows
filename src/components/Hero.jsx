import React from "react";
import heroImg from "../assets/img/hero.png";
export default function Hero() {
  return (
    <section
      className="h-[70vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {" "}
      {/* Optional dark overlay for contrast */}{" "}
      <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
      {/* Text Content */}{" "}
      <div className="relative  h-full flex items-center px-8 md:px-16">
        {" "}
        <div className="text-white max-w-lg">
          {" "}
          <h1 className="text-4xl md:text-6xl font-bold">
            {" "}
            Explore the Swiss Alps{" "}
          </h1>{" "}
          <p className="mt-4 text-lg">
            {" "}
            Book your adventure today and experience nature like never before.{" "}
          </p>{" "}
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-md font-medium">
            {" "}
            Start Your Journey{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
