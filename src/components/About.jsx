import React from "react";
import Nav from "./Nav";
import { FaMobileAlt } from "react-icons/fa";
import skills from "../assets/img/index.js";

const About = () => {
  const Card = ({ icon, title, description }) => (
    <div className="shadow-black shadow rounded-2xl p-10">
      <div id="under-the-card" className="flex gap-7">
        {icon}
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  const activities = [
    {
      icon: <FaMobileAlt className="text-3xl text-[#FEC663]" />,
      title: "Mobile Apps",
      description:
        "Professional development of applications for Android and iOS.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#FEC663]" />,
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#FEC663]" />,
      title: "API Integration",
      description: "Seamless integration of REST APIs for robust app.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#FEC663]" />,
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces.",
    },
  ];

  const skillImages = [
    skills.css,
    skills.js,
    skills.react,
    skills.node,
    skills.python,
    skills.mongo,
    skills.sql,
  ];

  return (
    <div
      id="about-section"
      className="w-screen min-h-screen ml-10 mt-20 relative rounded-3xl mr-20 bg-[#1E1E1F] overflow-x-hidden overflow-y-auto"
    >
      <header className="h-[9vw] relative">
        <Nav activePage="about" />
        <div id="about-h1" className="h-full flex items-center ml-10">
          <h1 id="about-text" className="text-white font-bold text-3xl">
            About Me
          </h1>
        </div>
        <div className="w-14 rounded-3xl h-1 bg-[#FDC965] absolute bottom-0 left-[40px]"></div>
      </header>

      <div id="about-paras" className="text-white m-10 font-light">
        <p className="mb-3">
          I am a passionate and detail-oriented Frontend Developer with a strong
          focus on creating engaging, user-friendly, and responsive web
          applications. With expertise in modern JavaScript frameworks like
          React, I specialize in building dynamic and interactive user
          interfaces that deliver seamless experiences across all devices. I
          have a deep understanding of HTML, CSS, and JavaScript, along with
          experience in state management, API integration, and performance
          optimization. I am committed to writing clean, maintainable, and
          scalable code while adhering to best practices and industry standards.
        </p>
        <p>
          Collaborating closely with designers and backend developers, I ensure
          that the final product not only looks great but also functions
          flawlessly. I am constantly learning and staying up-to-date with the
          latest trends and technologies in frontend development to deliver
          cutting-edge solutions. If you're looking for a dedicated Frontend
          Developer to bring your ideas to life, let's connect and create
          something amazing together!
        </p>
      </div>

      <div id="about-what" className="text-white m-10">
        <h1 id="what" className="text-2xl font-semibold mb-10">What I'm Doing</h1>
        <div className="flex flex-col gap-5">
          <div id="about-card" className="flex gap-5">
            {activities.slice(0, 2).map((activity, index) => (
              <Card key={index} {...activity} />
            ))}
          </div>
          <div id="about-card-2" className="flex gap-5">
            {activities.slice(2, 4).map((activity, index) => (
              <Card key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      <div id="skills-section" className="m-10">
        <h1 className="text-white text-2xl font-semibold mb-5">Skills</h1>
        <div
          id="image-section"
          className="flex gap-10 py-10 m-5 overflow-y-auto"
        >
          {skillImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-[10vw] h-[10vw] shadow-2xl rounded-2xl p-5 shadow-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
