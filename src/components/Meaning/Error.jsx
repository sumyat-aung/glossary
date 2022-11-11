import React from "react";

function Error() {
  return (
    <>
      <div className="p-4 m-5  font-mono">
        <h1 className=" mb-3 font-black ">No Definitions Found!</h1>
        <p className="font-thin">
          Sorry pal, we couldn't find definitions for the word you were looking
          for.
        </p>
      </div>
    </>
  );
}

export default Error;
