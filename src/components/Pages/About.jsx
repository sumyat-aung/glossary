import React from "react";
import Footer from "../Bar/Footer";

function About() {
  return (
    <>
      <div className="h-[70vh] relative flex flex-col items-center md:my-20">
        <ul className="list-outside list-disc marker:text-xl marker:text-cyan-400 my-4">
          <li className=" mx-5 my-5 font-mono font-light tracking-wider ">
            Great resource for finding the correct spelling and definition of
            words.
          </li>
          <li className=" mx-5 my-5 font-mono font-light tracking-wider ">
            Provides phonetic pronunciations of words.
          </li>
          <li className=" mx-5 my-5 font-mono font-light tracking-wider ">
            Includes audio recordings of the word being pronounced.
          </li>
          <li className=" mx-5 my-5 font-mono font-light tracking-wider ">
            Useful tool for anyone who wants to improve their language skills.
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
}

export default About;
