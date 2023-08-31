import React from "react";

const TechSkill = ({ title = "", body = "", domain = 0, icon = null, backgroundIcon = "" }) => {
  return (
    <div className="relative">
      <div className="flex flex-col h-auto p-2 pt-5 mt-5 text-xs rounded-md bg-light-primary">
        <span className="font-bold">{title}</span>
        <span>{body}</span>
        <div className="flex items-center gap-2">
          <span>Dominio:</span>
          <div className="w-full h-2.5 rounded-full bg-light-bg">
            <div
              className="h-full rounded-full bg-light-tertiary"
              style={{
                width: domain + "%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={"absolute top-0 grid h-10 rounded-md place-content-center left-3 drop-shadow-lg " + backgroundIcon}>
        {icon}
      </div>
    </div>
  );
};

export default TechSkill;
