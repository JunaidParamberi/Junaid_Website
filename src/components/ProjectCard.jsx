import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ProjectCard({ item }) {
  const location = useLocation();
  const isProjectsPage = location.pathname.includes("projects");
  const toPath = isProjectsPage ? `${item.name}` : `projects/${item.name}`;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-[10px] w-[50%] max-md:w-[95%] flex flex-col gap-1 duration-200 transition-all overflow-hidden rounded-[10px]"
    >
      <img
        className={`w-full h-[63vh] rounded-[10px]  object-cover max-md:h-[37vh] max-md:rounded-[15px] transition-transform duration-300 ${isHovered ? "scale-[1.05]" : ""}`}
        src={item.photoUrl}
        alt={item.name}
      />

      {isHovered && (
        <div className="absolute inset-0 bg-[#000000aa] flex flex-col justify-center items-center p-4 text-white rounded-[10px] transition-all duration-200">
          <h1 className="text-[26px] font-medium">{item.name}</h1>
          <h2 className="text-[14px] font-light">{item.work}</h2>
          <Link
            to={toPath}
            className="mt-2 px-4 py-2 bg-[#000000] font-bold rounded-full hover:bg-gray-300 hover:text-black"
          >
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
