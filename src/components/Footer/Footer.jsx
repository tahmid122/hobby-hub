import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import { Link } from "react-router";
import logo from "/logo1.png";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full pt-10 pb-2 ">
      <div className="w-full md:w-11/12 mx-auto">
        <footer className="footer lg:footer-horizontal  text-white p-5 md:p-2">
          <nav className="space-y-3">
            <Link to={"/"} className="flex items-center gap-2">
              <span className="text-5xl">
                <img className="w-14" src={logo} alt="" />
              </span>
              <span className="text-3xl font-semibold text-white">
                HobbyHub
              </span>
              {/* <img className="h-12 w-full" src={smileLogo} alt="" /> */}
            </Link>

            <p className="text-sm text-gray-300">
              Join a group or start your own. <br />
              Hobbies aren’t just for fun — they connect us. <br />
              Build community through shared passion
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Navigation</h6>
            <Link to={"/"} className="link link-hover">
              Home
            </Link>
            <Link to={"/login"} className="link link-hover">
              Login
            </Link>
            <Link to={"/register"} className="link link-hover">
              Register
            </Link>
          </nav>
          <div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-80">
                <label>Enter your email address</label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="input join-item text-black"
                  />
                  <button className="btn btn-secondary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <nav>
            <h6 className="footer-title">Social Media</h6>
            <div className="flex items-center gap-6">
              <a
                className=""
                href="https://www.facebook.com/TahmidAlamJG"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a
                className=""
                href="https://www.linkedin.com/in/tahmidalam122/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className=""
                href="https://github.com/tahmid122"
                target="_blank"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </nav>
        </footer>
        <p className="text-white block text-center text-sm">
          HobbyHub, All rights reserved &copy; 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
