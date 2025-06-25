import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full pt-10 pb-10 ">
      <div className="w-full md:w-11/12 mx-auto">
        <footer className="footer sm:footer-horizontal  text-white p-5 md:p-2">
          <nav>
            <h6 className="text-2xl font-bold">HobbyHub</h6>
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
                className="hover:text-secondary"
                href="https://www.facebook.com/TahmidAlamJG"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a
                className="hover:text-secondary"
                href="https://www.linkedin.com/in/tahmidalam122/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className="hover:text-secondary"
                href="https://github.com/tahmid122"
                target="_blank"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </nav>
          <nav className="hidden lg:block text-center rotate-90 mt-10 text-sm  -mr-40">
            HobbyHub,
            <br /> All rights reserved. &copy;2025
          </nav>
        </footer>
        <p className="text-white block lg:hidden text-center text-sm">
          HobbyHub, All rights reserved &copy; 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
