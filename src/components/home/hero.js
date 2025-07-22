import React from "react";
import Container from "../common/container";
import Section from "../common/section";
import Icons from "../common/icons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Section className="text-center main-bg px-4 py-20 sm:px-8 sm:py-40">      
      <Container>
        <h1 className="text-4xl md:text-[64px] font-semibold text-white mt-8">
          What can we help you with?
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-gray-50 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative flex items-center w-full max-w-xl mx-auto text-gray-700">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <Icons.search className="size-6" />
          </div>
          <input
            type="search"
            className="ps-10 pe-4 py-2 sm:py-4 sm:ps-10 sm:pe-6 outline-none bg-gray-50 border border-gray-400 rounded-full h-full w-full"
            placeholder="Search..."
          />
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
