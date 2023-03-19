import React, { useState } from "react";
//import IonIcon from "@reacticons/ionicons";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Find jobs", link: "/" },
    { name: "Companies", link: "/" },
    { name: "Candidates", link: "/" },
    { name: "Pages", link: "/" },
    { name: "Blogs", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  const toggleMenuIcon = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-black text-white flex py-3 px-10 text-sm justify-between font-bold">
        <div className="flex gap-2">
          <Icon color="#999" iconName="square" />
          <p> Subscribe for job alerts by email!</p>
        </div>
        <div className="flex gap-5">
          <span className="flex gap-2">
            <Icon color="#999" iconName="square" /> (00) 658 54332{" "}
          </span>
          <span className="flex gap-2 pl-2">
            {" "}
            <Icon color="#999" iconName="square" />
            hello@uxper.co
          </span>
        </div>
      </div>
      <div className="relative w-full bg-gray-200">
        <div className="md:flex items-center py-5 px-4 md:px-10">
          <div className="">
            <span className="font-bold text-2xl">Tunisia Work</span>
          </div>
          <nav className="flex-1 flex items-center justify-between">
            <div
              className="text-3xl absolute top-[25%] right-5 cursor-pointer lg:hidden"
              onClick={toggleMenuIcon}
            >
              <Icon color="#999" iconName="coffee" />
            </div>
            <div
              className={`bg-gray-200 flex-1 lg:p-1 lg:flex lg:justify-between lg:items-center absolute lg:static left-0 w-full lg:w-auto pl-9 transition-opacity duration-500 ease-lg:in ${
                open ? "top-[72px] opacity-100" : "top-[-690px]"
              }`}
            >
              <ul className="lg:flex lg:items-center lg:justify-center">
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="py-1 text-l min-w-[100px] lg:text-center"
                  >
                    <a
                      className=" block py-2 text-gray-800 font-semibold hover:text-gray-400 duration-500 pb-5 lg:pb-0"
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-2 py-2 lg:py-0">
                <div>
                  <Button size="medium" text="sm" type="primary">
                    Login
                  </Button>
                </div>
                <div className="min-w-[120px]">
                  <Button size="medium" text="sm" type="primary">
                    Post A Job
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
