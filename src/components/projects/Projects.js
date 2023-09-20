import { GrGithub, GrView } from "react-icons/gr";
import data from "../../data/data";
const Projects = () => {
  const projects = data.projects;

  return (
    <section className="projects mt-20 container mx-auto py-3 px-3 ">
      <h1 className="text-center text-3xl md:text-5xl pl-3 font-medium text-slate-400">
        Projects
      </h1>
      <div className="wrapper grid grid-rows-1 grid-cols-2 gap-4 my-10 md:grid-rows-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="relative group ">
            <img src={project.url} alt="projects" />
            <div className="link-pro absolute bottom-0 px-3 py-3  bg-slate-200 w-full h-8  hidden  group-hover:flex items-center justify-between text-xl">
              <GrGithub className="cursor-pointer" title="Github" />
              <p className="text-sm text-center font-medium">Name project</p>
              <GrView className="cursor-pointer" title="View" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
