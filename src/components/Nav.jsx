import React from "react";

const Nav = ({activePage}) => {
    
  return (
    <div id="nav" className="flex bg-[#282829] float-right text-white px-10 py-5 rounded-tr-3xl rounded-bl-3xl">
      <ul id="nav-ul" className="flex gap-10">
        <li>
          <a
            href="/"
            className={`px-4 py-2 ${
              activePage === "about" ? "text-yellow-500" : "text-white"
            }`}
          >
            About
          </a>
        </li>
        <li>
        <a
            href="/projects"
            className={`px-4 py-2 ${
              activePage === "projects" ? "text-yellow-500" : "text-white"
            }`}
          >
            Projects
          </a>
        </li>
        <li>
        <a
            href="https://t.me/+Wtzc6Uao-MBjOTE1"
            target="_blank"
            className={`px-4 py-2 ${
              activePage === "contact" ? "text-yellow-500" : "text-white"
            }`}
          >
            Contact
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1OvVbB1zFSoZwVIhQFrRTv4cW9s7OF4_c/view" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
