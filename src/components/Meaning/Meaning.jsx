import React from "react";

function Meaning(props) {
  let { dictionaryData, term } = props;

  const GetSoundOfwords = () => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(term);
    synth.speak(utterThis);
  };

  return (
    <div className="border border-zinc-700 p-4 pb-[50px] mx-2 my-6 md:mx-20 lg:w-[800px]">
      <div className="pb-[30px] pt-[10px] flex justify-between items-center">
        {dictionaryData[0].phonetic && (
          <h2 className="font-mono text-md tracking-widest">
            {dictionaryData[0].phonetic}
          </h2>
        )}

        {dictionaryData[0].meanings[0].partOfSpeech && (
          <h2 className="font-mono capitalize underline underline-offset-8 decoration-orange-700 text-md">
            {dictionaryData[0].meanings[0].partOfSpeech}
          </h2>
        )}

        <i className="fa-solid fa-volume-high" onClick={GetSoundOfwords}></i>
      </div>
      {dictionaryData.map((meaning) => {
        return (
          <>
            {meaning.meanings.map((item) => {
              return item.definitions.map((def) => {
                return (
                  <h1 className="font-extralight mb-2 leading-6">
                    ⇀ {def.definition}
                  </h1>
                );
              });
            })}
            <a
              href={`${meaning.sourceUrls}`}
              className="font-mono no-underline text-amber-700 font-semibold hover:text-amber-800 hover:translate-x-2 flex justify-end w-full float-left mb-10 transition-all"
              target="_blank"
            >
              View Detail ⇀
            </a>
          </>
        );
      })}
    </div>
  );
}

export default Meaning;
