import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faDesktop,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import Personal from "./components/Personal";
import Skills from "./components/Skills";

const App = () => {
  const [tab, setTab] = useState("personal");

  return (
    <div className="flex flex-col min-h-screen bg-light-bg text-light-secondary">
      <nav className="flex self-center justify-around w-11/12 py-4 my-8 rounded-md bg-light-primary">
        <FontAwesomeIcon
          onClick={() => setTab("personal")}
          icon={faUser}
          className={tab === "personal" ? "text-light-tertiary" : "text-light-bg"}
        />
        <FontAwesomeIcon 
          onClick={() => setTab("skills")}
          icon={faCode}
          className={tab === "skills" ? "text-light-tertiary" : "text-light-bg"}
        />
        <FontAwesomeIcon icon={faDesktop} className="text-light-bg" />
        <FontAwesomeIcon icon={faMoon} className="text-yellow-500" />
      </nav>
      <main className="flex flex-col w-auto mb-8">
        {/* <Personal /> */}
        {/* <Skills /> */}
        {
          tab === "personal" ?
            <Personal />
          : tab === "skills" ?
            <Skills />
          :
            null
        }
      </main>
    </div>
  );
};

export default App;
