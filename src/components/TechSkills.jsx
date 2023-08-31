import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faPhp,
  faLaravel,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlagUsa,
  faDatabase,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

import TechSkill from "./TechSkill";

const TechSkills = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-light-primary">
        <span className="self-center px-1 text-lg font-bold border-b-4 border-light-tertiary">
          Habilidades técnicas
        </span>
      </div>
      <div className="grid items-center grid-cols-2 p-1 rounded-md gap-y-3 gap-x-1">
        <TechSkill
          title="Office Suite"
          body="Paquete ofimático"
          domain={80}
          icon={
            <FontAwesomeIcon
              icon={faWindows}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-gray-950"
        />
        <TechSkill
          title="HTML5"
          body="Web"
          domain={80}
          icon={
            <FontAwesomeIcon
              icon={faHtml5}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-orange-600"
        />
        <TechSkill
          title="CSS3"
          body="Web"
          domain={80}
          icon={
            <FontAwesomeIcon
              icon={faHtml5}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-sky-500"
        />
        <TechSkill
          title="JavaScript"
          body="Web"
          domain={80}
          icon={
            <FontAwesomeIcon
              icon={faJsSquare}
              className="px-2 text-2xl text-gray-950"
            />
          }
          backgroundIcon="bg-yellow-500"
        />
        <TechSkill
          title="React JS / React Native"
          body="Librería para UI"
          domain={85}
          icon={
            <FontAwesomeIcon
              icon={faReact}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-sky-500"
        />
        <TechSkill
          title="Php"
          body="Lenguaje para backend"
          domain={85}
          icon={
            <FontAwesomeIcon
              icon={faPhp}
              className="px-2 text-2xl text-gray-950"
            />
          }
          backgroundIcon="bg-indigo-800"
        />
        <TechSkill
          title="Inglés"
          body="Lenguaje"
          domain={75}
          icon={
            <FontAwesomeIcon
              icon={faFlagUsa}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-red-500"
        />
        <TechSkill
          title="SQL"
          body="Lenguaje para bases de datos"
          domain={70}
          icon={
            <FontAwesomeIcon
              icon={faDatabase}
              className="px-2 text-2xl text-gray-200"
            />
          }
          backgroundIcon="bg-zinc-800"
        />
        <TechSkill
          title="Laravel"
          body="Framework para php"
          domain={40}
          icon={
            <FontAwesomeIcon
              icon={faLaravel}
              className="px-2 text-2xl text-gray-300"
            />
          }
          backgroundIcon="bg-red-600"
        />
        <TechSkill
          title="Tailwind CSS"
          body="Framework para CSS"
          domain={70}
          icon={
            <div className="px-2 text-gray-300 w-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
              >
                <g clip-path="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fill-rule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clip-rule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          }
          backgroundIcon="bg-blue-950"
        />
        <TechSkill
          title="C# / .NET"
          body="Desarrollo multiplataforma"
          domain={20}
          icon={
            <div className="h-10 px-2 text-gray-300 bg-center bg-no-repeat bg-cover w-11 bg-dotnet">
            </div>
          }
          backgroundIcon=""
        />
        <TechSkill
          title="SCRUM"
          body="Metodología de trabajo"
          domain={20}
          icon={
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="px-2 text-2xl text-light-secondary"
            />
          }
          backgroundIcon="bg-light-primary"
        />
      </div>
    </>
  );
};

export default TechSkills;
