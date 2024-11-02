"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import { Boxes } from "./ui/background-boxes";
import { TextHoverEffect } from "./ui/text-hover-effect";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import FeaturedProjects from "./FeatureProjects";
import UpcomingWebinars from "./UpcomingWebinars";
import Footer from "./Footer";
import Instructor from "./Instructor";
import PortfolioTestimonial from "./TestimonialCards";

const Hero = () => {
  return (
    <>
      <div>
        <Spotlight
          className="h-screen -top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight
          className="top-29 right-full h-[80vh] w-[50vw] "
          fill="#91e5f6"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="red" />
        <Spotlight
          className="top-48 left-40 h-[80vh] w-[50vw]"
          fill="#f5cc00"
        />
        <Spotlight className="top-98 left-20 h-[80vh] w-[50vw]" fill="#47026c" />
      </div>
      <div className="min-h-screen relative w-full overflow-hidden bg-[#2f3e46] flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-[#002642] z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div>
          <TextHoverEffect text="Welcome To My Portfolio" />

          <TextGenerateEffect
            words="
         It's Muhammad Tayyab
         "
          />

          <p className="text-center relative md:tracking-wider mb-4 text-sm md:text-lg ld:text-2xl p-10 text-[#e0e1dd]">
            Muhammad Tayyab is a skilled web developer focused on creating{" "}
            <i>modern, engaging</i>
            <br />
            digital experiences. Known for his expertise in{" "}
            <b>front-end development</b>, he combines sleek design
            <br />
            with smooth functionality to build websites and applications that
            stand out.
            <br />
            Driven by quality and innovation, Tayyab transforms ideas
            <br />
            into user-friendly, interactive interfaces.
            <br />
            <br />
            <a href="https://www.linkedin.com/in/ch-muhammad-tayyab/">
              <MagicButton
                title="Hire Me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </p>
        </div>
      </div>
      <FeaturedProjects />
      <div
        className="min-h-screen bg-[#121113] antialiased
    bg-grid-white/[0.5]">
        <PortfolioTestimonial />
      </div>
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </>
  );
};
export default Hero;
