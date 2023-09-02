import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faDesktop,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    let isPc = window.innerWidth >= 1024

    if (isPc) {
      setTab("skills")
    }
  }, [])

  const [tab, setTab] = useState("personal");

  return (
    <div className="flex flex-col min-h-screen bg-light-bg text-light-secondary lg:grid lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout dark:bg-dark-bg dark:text-dark-secondary">
      <div className="flex flex-col lg:grid-in-nav">
        <nav className="flex self-center justify-around w-11/12 py-4 my-8 text-lg rounded-md bg-light-primary md:w-7/12 lg:my-auto lg:py-2 lg:text-xs lg:self-end lg:mr-8 dark:bg-dark-primary">
          <FontAwesomeIcon
            onClick={() => setTab("personal")}
            icon={faUser}
            className={
              (tab === "personal" ? "text-light-tertiary dark:text-dark-tertiary" : "text-light-bg dark:text-dark-bg") +
              " lg:hidden hover:cursor-pointer hover:text-light-tertiary dark:hover:text-dark-tertiary"
            }
          />
          <FontAwesomeIcon
            onClick={() => setTab("skills")}
            icon={faCode}
            className={
              (tab === "skills" ? "text-light-tertiary dark:text-dark-tertiary" : "text-light-bg dark:text-dark-bg") +
              " hover:cursor-pointer hover:text-light-tertiary dark:hover:text-dark-tertiary"
            }
          />
          <FontAwesomeIcon
            onClick={() => setTab("projects")}
            icon={faDesktop}
            className={
              (tab === "projects" ? "text-light-tertiary dark:text-dark-tertiary" : "text-light-bg dark:text-dark-bg") +
              " hover:cursor-pointer hover:text-light-tertiary dark:hover:text-dark-tertiary"
            }
          />
          <FontAwesomeIcon onClick={() => {
            let htmlElement = document.documentElement

            htmlElement.classList.toggle("dark")
          }} icon={faMoon} className="text-yellow-500 hover:cursor-pointer" />
        </nav>
      </div>
      <div className="flex flex-col bg-light-bg dark:bg-dark-bg lg:grid-in-main">
        <main className="flex flex-col w-auto mb-8 md:w-8/12 md:self-center lg:w-full lg:px-8">
          {tab === "personal" ? (
            <Personal />
          ) : tab === "skills" ? (
            <Skills />
          ) : (
            <Projects />
          )}
        </main>
      </div>
      <div className="flex-col hidden bg-light-bg dark:bg-dark-bg lg:flex grid-in-personal">
        <Personal />
      </div>
    </div>
  );
};

export default App;
