import {useState } from "react";
import data from "../../data/data";

const Skills = () => {


  const [skills, setSkills] = useState(data.frontend);

  const backend = () =>{
    setSkills(data.backend);
  }
  const frontend = () =>{
    setSkills(data.frontend);
  }
    const outils = () => {
      setSkills(data.outils);
    };


  return (
    <section className="mt-20 container mx-auto py-3 px-3">
      <h1 className="text-center text-3xl md:text-5xl pl-3 font-medium text-slate-400">
        Skills
      </h1>
      <div className="control my-10 flex justify-between">
        <button
          className="bg-slate-600 hover:bg-slate-500 text-white  font-medium text-lg rounded-md p-3 w-1/3 mx-3"
          onClick={backend}
        >
          Back End
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-500 text-white font-medium  text-lg rounded-md p-3 w-1/3 mx-3"
          onClick={outils}
        >
          Tools
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-500 text-white font-medium  text-lg rounded-md p-3 w-1/3 mx-3"
          onClick={frontend}
        >
          Front End
        </button>
      </div>
      <div className="skills flex  space-x-8 justify-center px-3">
        {skills.map((skill, index) => (
          <div key={index} className="mt-10">
            <img src={skill.url} alt={skill.name} className={skill.size} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
