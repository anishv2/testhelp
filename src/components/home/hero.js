import React from "react";
import Container from "../common/container";
import Section from "../common/section";
import Icons from "../common/icons";
import Image from "next/image";
import Searchbar from "../common/searchbar";

const HeroSection = () => {
  return (
    <Section className="text-center main-bg px-4 py-20 sm:px-8 sm:py-40">      
      <Container>
        <h1 className="text-4xl md:text-[64px] font-semibold text-white mt-8">
          What can we help you with?
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-gray-50 mb-5">
         Have questions? Search through our Help Center.
        </p>
        <div className="relative flex items-center w-full max-w-xl mx-auto text-gray-700">
          <Searchbar />
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
