import React from "react";
import { Link } from "react-router";
import icon2 from "/images/about-bag-icon.webp";
import icon1 from "/images/about-location-icon.webp";
import icon3 from "/images/about-photo-icon.webp";
import aboutBanner from "/images/about-banner.webp";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaYoutube } from "react-icons/fa6";
const About = () => {
  return (
    <div className="">
      <div className="bg-secondary p-8 lg:p-40">
        <div className=" text-white lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-5">
            HobbyHub <br /> creates possibilities to find and build local
            communities
          </h1>
          <p className="mb-5 text-base lg:text-xl">
            People use HobbyHub to meet new people, learn new things, find
            support, get out of their comfort zones, and pursue their passions,
            together.
          </p>
          <Link to={"/register"} className="btn btn-outline font-semibold">
            Join HobbyHub
          </Link>
        </div>
      </div>
      <div className="my-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
            What you can do
          </h1>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:text-white">
            <div className="text-center">
              <img className="w-32 mx-auto mb-5" src={icon1} alt="" />
              <h3 className="text-xl font-bold  mb-2">Explore your city</h3>
              <p className="text-base w-3/4 mx-auto">
                Visit a museum, try new food, go hiking, hit up a brewery tour,
                or just go meet new people
              </p>
            </div>
            <div className="text-center">
              <img className="w-32 mx-auto mb-5" src={icon2} alt="" />
              <h3 className="text-xl font-bold  mb-2">Build your career</h3>
              <p className="text-base w-3/4 mx-auto">
                Test a prototype, network, take a class, learn a language, pitch
                to investors, or learn a new skill
              </p>
            </div>
            <div className="text-center">
              <img className="w-32 mx-auto mb-5" src={icon3} alt="" />
              <h3 className="text-xl font-bold  mb-2">Get creative</h3>
              <p className="text-base w-3/4 mx-auto">
                Create a podcast, write a screenplay, discuss art, design
                something, or get feedback on your work
              </p>
            </div>
          </div>
        </div>
        <img className="w-full" src={aboutBanner} alt="" />
        <div className="my-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
            Follow
          </h1>
          <div className="my-10 grid grid-cols-4">
            <Link
              to={"https://www.facebook.com/TahmidAlamJG"}
              target="_blank"
              className="flex items-center justify-center flex-col gap-3 border-r-4 border-r-secondary dark:border-r-white"
            >
              <FaFacebook
                size={50}
                className="text-secondary dark:text-white"
              />
              <p className="text-base font-bold">Facebook</p>
            </Link>

            <Link
              to={"https://www.linkedin.com/in/tahmidalam122/ dark:text-white"}
              target="_blank"
              className="flex items-center justify-center flex-col gap-3 border-r-4 border-r-secondary dark:border-r-white"
            >
              <FaLinkedin
                size={50}
                className="text-secondary dark:text-white"
              />
              <p className="text-base font-bold">Linkedin</p>
            </Link>
            <Link
              to={"https://github.com/tahmid122"}
              target="_blank"
              className="flex items-center justify-center flex-col gap-3 border-r-4 border-r-secondary dark:border-r-white"
            >
              <FaGithub size={50} className="text-secondary dark:text-white" />
              <p className="text-base font-bold">Github</p>
            </Link>
            <Link
              to={"https://www.youtube.com/@tahmidalam122"}
              target="_blank"
              className="flex items-center justify-center flex-col gap-3"
            >
              <FaYoutube size={50} className="text-secondary dark:text-white" />
              <p className="text-base font-bold">Youtube</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
