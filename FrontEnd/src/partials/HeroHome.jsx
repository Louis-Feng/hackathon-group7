import React, { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Meet</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Let's Meet is a platform for you to meet new people and do activities together! Simply create a new event or join events organised by your fellow colleagues!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div className="search"> <TextField id="outlined-basic"   variant="outlined"  fullWidth  label="Search" />
                  <br></br>
                  <br></br>
                  <div>
                    <Link to="calendar" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">Explore events</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <List input={inputText} />
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;