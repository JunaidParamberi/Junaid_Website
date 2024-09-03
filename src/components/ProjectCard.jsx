import React from 'react'
import Windowline from '../assets/images/Projects/Windowline.jpg'
import { Link, useLocation} from 'react-router-dom'

function ProjectCard({ item }) {
  const location = useLocation();
  const isProjectsPage = location.pathname.includes("projects");
  const toPath = isProjectsPage ? `${item.name}` : `projects/${item.name}`;

  

  return (
    <Link
      to={toPath}
      className="p-[10px] w-[50%] max-md:w-[95%] flex flex-col gap-1 hover:scale-[1.02] duration-200 transition-all"
    >
      <img
        className="w-full h-[63vh] rounded-[10px] object-cover max-md:h-[37vh] max-md:rounded-[15px]"
        src={item.photoUrl}
        alt={item.name}
      />
      <div className="mt-1">
        <h1 className="text-[20px] font-medium">{item.name}</h1>
        <h1 className="text-[14px] font-light">{item.work}</h1>
      </div>
    </Link>
  );
}

export default ProjectCard
