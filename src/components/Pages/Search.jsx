import React, { useEffect } from "react";
import { useState } from "react";

import Meaning from "../Meaning/Meaning";
import Error from "../Meaning/Error";

function Search() {
  const [term, setTerm] = useState("");
  const [dictionaryData, setDictionaryData] = useState();

  // Handling INPUT value and set IT onto term state
  function inputHandle(e) {
    setTerm(e.target.value);
  }

  // fetching data and set dictionaryData
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      .then((response) => response.json())
      .then((response) => setDictionaryData(response))
      .catch((err) => {
        return <h2>Error Fetching</h2>;
      });
  }, [term]);

  // Render or display Error/> component when THE dictionaryData is an OBJ (API return an obj when they can't find something)
  function ErrorPageRendering() {
    if (
      typeof dictionaryData === "object" &&
      !Array.isArray(dictionaryData) &&
      dictionaryData !== null
    ) {
      return <Error />;
    } else {
      return;
    }
  }

  return (
    <>
      <h1 className="text-[40px] tracking-widest title mt-4 ml-4 md:text-center">
        Glossary
      </h1>
      <div className="md:text-center">
        <input
          type="text"
          className="ml-4 text-zinc-100 bg-zinc-600 px-5 py-2 lowercase font-light border-none rounded-[10px] focus:outline-none w-[90%] font-mono tracking-widest mt-2 lg:w-[800px]"
          placeholder="search here ... "
          onChange={inputHandle}
          value={term}
        />
        <h6 className=" font-mono tracking-widest text-zinc-400 ml-9 mt-4">
          search term : {term ? term : "Glossary"}
        </h6>
      </div>

      <div className="mt-4 mb-7 lg:flex flex-col justify-center items-center">
        {Array.isArray(dictionaryData) && (
          <Meaning dictionaryData={dictionaryData} term={term} />
        )}

        {!Array.isArray(dictionaryData) && ErrorPageRendering()}
      </div>
    </>
  );
}

export default Search;
