import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Bar/Header";
import Search from "./components/Pages/Search";
import About from "./components/Pages/About";
import PageNotFound from "./components/404/PageNotFound";

const App = () => {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-50 w-full h-full relative">
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
