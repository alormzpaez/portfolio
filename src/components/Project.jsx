import React from "react";

const Project = ({
  title = "",
  subtitle = "",
  body = "",
  available = false,
  link = "",
  bgPhoto = "",
}) => {
  return (
    <div className="flex flex-col p-1 rounded-md">
      <div className="relative">
        <div className="flex flex-col h-auto px-4 pt-10 pb-2 mt-16 text-sm rounded-md bg-light-primary md:mt-20 lg:text-xs dark:bg-dark-primary">
          <span className="text-base font-bold lg:text-xs">{title}</span>
          <span className="text-light-fourth dark:text-dark-fourth">{subtitle}</span>
          <span>{body}</span>

          {available ? (
            <button
              onClick={() =>
                (window.location.href = link)
              }
              className="self-center flex-grow-0 px-8 py-2 mt-2 font-semibold rounded-full bg-light-tertiary dark:bg-dark-tertiary w-fit dark:text-dark-bg"
            >
              Ver más
            </button>
          ) : (
            <button
              className="self-center flex-grow-0 px-8 py-2 mt-2 rounded-full bg-light-bg w-fit text-light-fourth dark:text-dark-fourth"
            >
              No disponible
            </button>
          )}
        </div>
        <div
          className={
            "absolute top-0 left-1/2 -translate-x-1/2 grid h-24 rounded-md place-content-center w-10/12 drop-shadow-lg bg-contain bg-no-repeat bg-center self-end bg-light-primary dark:bg-dark-primary md:w-8/12 md:h-28 " + bgPhoto
          }
        ></div>
      </div>
    </div>
  );
};

export default Project;
