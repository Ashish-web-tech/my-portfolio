import React from 'react'
import Nav from "./Nav";
import port from "../assets/img/portfolio-project-img.jpeg";
import movies from "../assets/img/movies.png";




const Projects = () => {


    const ProjectsCard = ({title,mode,img})=>{
        return (
            <div id='under-the-project' className='text-white flex flex-col gap-3'>
                <img src={img} alt="This is an Image" className='h-[170px] rounded-3xl' />
                <div className='ml-2'>
                <h1 className='text-xl'> {title} </h1>
                <p className='font-light'>{mode}</p>
                </div>
            </div>
        )
    }


    
  return (
    <div
      id="project-section"
      className="w-screen min-h-screen ml-10 mt-20 relative rounded-3xl mr-20 bg-[#1E1E1F] overflow-x-hidden"
    >
      <header className="h-[7vw] relative mb-10">
        <Nav activePage="projects" />
        <div id='project-word' className="h-full flex items-center ml-10">
          <h1 className="text-white font-bold text-3xl">
            Projects
          </h1>
        </div>
        <div className="w-14 rounded-3xl h-1 bg-[#FDC965] absolute bottom-0 left-[40px]"></div>
      </header>
      <div id='project-card' className='flex justify-around overflow-y-auto mb-10'>
        <a href="https://ashish-web-tech.github.io/my-portfolio/">
          <ProjectsCard title = "Portfolio" mode = "Web Development" img = {port} />
        </a>
        <a href="https://main.dqttgwxr1phte.amplifyapp.com/">
          <ProjectsCard title = "MoviesDhaba" mode = "Web Development" img = {movies} />
        </a>
        <ProjectsCard title = "Dummy" mode = "Dummy" img = "" />
      </div>
    </div>
  )
}

export default Projects