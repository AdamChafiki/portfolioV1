import { GrInstagram,GrFacebook,GrLinkedin } from "react-icons/gr";

const About = () => {
  return (
    <section className="about mt-7   container mx-auto flex  flex-col space-y-6  text-center items-center  px-3 py-3  md:flex-row md:text-left md:space-y-0 md:space-x-6">
      <div className=" w-full   md:w-1/2">
        <img
          src="https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg"
          alt="avatar"
          className="rounded-full w-[400px] border-4 mx-auto "
        />
        <h1 className="text-center text-3xl pl-3 font-medium text-slate-400 md:text-4xl">About Me</h1>
      </div>
      <div className=" w-full  md:w-1/2  flex flex-col">
        <h2 className=" text-2xl  md:text-3xl ">Hi There, I'm</h2>
        <h1 className=" text-4xl  text-slate-500 font-medium my-5 md:text-5xl">
          Adam Chafiki
        </h1>
        <h3 className=" text-3xl  md:text-4xl  ">
          <span className="type ">Full-Stack Developer</span>
        </h3>
        <div className="social flex justify-center cursor-pointer  space-x-7 text-2xl  mt-5 md:justify-normal">
          <GrInstagram />
          <GrFacebook />
          <GrLinkedin />
        </div>
      </div>
    </section>
  );
};

export default About;
