import React, { useState } from "react";
import boy from "../assets/img/boy.png";
import my from "../assets/img/my.jpg";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";


const Sidebar = () => {

  const [hide, setHide] = useState(false)
  // console.log(hide);
  
  

  return (
    <div
      id="sidebar-2"
      className="h-[80vh] text-white w-[19vw] rounded-3xl bg-[#1E1E1F] flex sticky top-[80px] ml-14 justify-around items-center flex-col "
    >
      <div id="sidebar-1024" className="flex justify-center w-full relative">
        <div id="sidebar-3" className=" flex flex-col gap-5 items-center">
          <a href={my} target="_blank" className="relative">
            <img
            id="sidebar-dp"
            src={boy}
            alt=""
            className="w-36 bg-[#393939] rounded-3xl p-3 mt-4"
            />
            <div id="online" className="w-[10px] h-[10px] bg-green-300 rounded-full absolute right-[5px] bottom-[5px]"></div>
            </a>
          <div className="flex gap-3 flex-col">
            <h1 id="name" className=" font-medium text-3xl ">Ashish Mishra</h1>
            <p id="desc" className="rounded-md text-center bg-[#393939] text-[12px] px-3 py-1">
              Frontend Developer
            </p>
          </div>
        </div>
        <div id="show-contact" className="absolute active:bg-amber-950 cursor-pointer top-[-29px] right-[-29px] rounded-bl-3xl rounded-tr-3xl hidden shadow-black shadow text-[#EECD6A] px-4 py-2">
          <button className="text-[12px] cursor-pointer "
          onClick={()=> setHide(!hide)}
          >Show Contacts</button>
        </div>
        <div id="show-contact-2" className="absolute top-[-29px] active:bg-amber-950 cursor-pointer right-[-29px] rounded-bl-3xl rounded-tr-3xl hidden shadow-black shadow text-[#EECD6A] px-4 py-2">
          <button
          onClick={()=> setHide(!hide)}
          
          >

        <MdKeyboardArrowDown className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div
        id="sidebar-hidden"
        className={`flex h-1/2 flex-col justify-around transition-all items-start w-full px-10 ${hide === true?"hidden":""}`}
      >
        
        <div className="flex gap-5 ">
          <div className="h-10 w-10 flex justify-center items-center shadow shadow-black rounded-xl ">
            <IoMdMail className="text-lg text-[#FEC663]" />
          </div>
          <div>
            <p className="text-[13px] text-gray-500">EMAIL</p>
            <a href="mailto:ashishkumar376230@gmail.com" className="text-sm">
              ashishkumar376....
            </a>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="h-10 w-10 flex justify-center items-center shadow shadow-black rounded-xl  ">
            <FaMobileAlt className="text-lg text-[#FEC663]" />
          </div>
          <div>
            <p className="text-[13px] text-gray-500">PHONE</p>
            <a href="tel:+919054570699" className="text-sm">
              +91 905457****
            </a>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="h-10 w-10 flex justify-center items-center shadow shadow-black rounded-xl">
            <FaLocationDot className="text-lg text-[#FEC663]" />
          </div>
          
          <div>
            <p className="text-[13px] text-gray-500">LOCATION</p>
            <a href="mailto:ashishkumar376230@gmail.com" className="text-sm">
              Silvassa, DNH
            </a>
          </div>
        </div>


        <div id="git-insta" className="flex gap-5 justify-center w-full">
          <a href="https://github.com/Ashish-web-tech" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[#D6D6D6]" />
          </a>
          <a href="https://www.instagram.com/ashishmishra_py/?igsh=MWpiaGgxd3J3N2w5#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#D6D6D6]" />
          </a>
          <a href="https://www.linkedin.com/in/ashish-mishra-59a36325a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#D6D6D6]" />
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
