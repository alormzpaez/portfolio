import React from "react";

import Project from "./Project";

const Projects = () => {
  return (
    <section className="static flex flex-col self-center w-10/12 gap-2 lg:w-full">
      <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-light-primary lg:py-2 lg:text-xs lg:self-end dark:bg-dark-primary">
        <span className="self-center px-1 text-lg font-bold border-b-4 border-light-tertiary lg:text-xs">
          Proyectos
        </span>
      </div>
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-y-3 lg:gap-x-7">
        <Project
          title="Helpin"
          subtitle="App Móvil | React Native"
          body="Destinada al aprendizaje del idioma inglés con información accesible a gramática, jergas y ejemplos."
          available={true}
          bgPhoto="bg-helpin"
          link="https://play.google.com/store/apps/details?id=com.whynot63dev.helpin"
        />
        <Project
          title="BackPack"
          subtitle="App Móvil | React Native, PHP, SQL"
          body="Red social educativa para compartir conocimientos y aprendizaje entre estudiantes"
          available={false}
          bgPhoto="bg-backpack"
        />
      </div>
    </section>
  );
};

export default Projects;
