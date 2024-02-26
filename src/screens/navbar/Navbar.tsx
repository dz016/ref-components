import { Link } from "react-router-dom";
import Button from "./components/button";
import Navlink from "./components/navlink";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="flex md:justify-around justify-between items-center px-4 py-3 w-full bg-slate-600 font-mono  ">
        <div className=" flex justify-between items-center w-full md:w-auto">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
              alt=""
              className=" h-7"
            />
          </Link>
          <IoMenu
            className="md:hidden block"
            size={32}
            color="white"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="">
          <ul className="md:flex hidden gap-12 text-white">
            <Navlink></Navlink>
          </ul>
        </div>
        <div className="md:block hidden">
          <Button></Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden block h-screen w-full absolute bg-slate-600 font-mono bottom-0 pb-10 pt-3 pl-5 ">
          <div className=" mb-10 flex justify-between items-center mx-3">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
                alt=""
                className=" h-7"
              />
            </Link>
            <IoMenu
              className="md:hidden block"
              size={32}
              color="white"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <ul className="flex flex-col gap-12 text-black ml-6 ">
            <Navlink></Navlink>
          </ul>
          <div className="ml-5 mt-4">
            <Button></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
