import React, { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";


import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";



const Header = () => {
  const [open1, setOpen] = useState(false);
  const [holdersDropdownOpen, setHoldersDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  const [scrollBackground, setScrollBackground] = useState(false);



  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav  className={`tw-top-0 tw-w-full tw-z-20 ${
      scrollBackground ? "tw-bg-[#161716] sm:tw-bg-[#161716] tw-fixed" : ""
    } sm:tw-relative md:tw-sticky `}>
      <div className="tw-flex tw-items-center tw-font-medium tw-h-32 container tw-mx-auto tw-justify-between">
        <div className="">
          <img
            src={require("../../assets/images/logo1.png")}
            className="tw-object-contain tw-w-[100px]"
            alt="Logo"
          />
        </div>

        <ul className="lg:tw-flex tw-hidden tw-items-center tw-gap-8 tw-font-[Poppins]">
          <li>
            <Link
              className='tw-text-white'
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "aboutSection")}
              className="tw-text-white"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "tokenSection")}
              className="tw-text-white"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "roadSection")}
              className="tw-text-white"
            >
              Road Map
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "teamSection")}
              className="tw-text-white"
            >
              Team
            </Link>
          </li>
          <li>
            <Link to={"/staking"} className="tw-text-white">
              Staking
            </Link>
          </li>
        
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "teamSection")}
              className="tw-text-white"
            >
              Team
            </Link>
          </li>
        </ul>

        <div className="md:tw-block tw-hidden">
          <Button
          
            onClick={() => open()} 
            Icons={<FaRegUser color="white" />}
            label={!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}
          />
        </div>

        <div
          className="tw-text-3xl lg:tw-hidden tw-pt-2 tw-z-50"
          onClick={() => setOpen(!open1)}
        >
          {open1 ? <MdOutlineClose color="white" /> : <MdMenu color="white" />}
        </div>

        {/* Mobile nav */}
        <div
          className={`
            lg:tw-hidden   tw-z-20  tw-shadow-xl tw-bg-[#161716]  tw-fixed tw-w-full tw-top-0 tw-overflow-y-auto tw-bottom-0 tw-leading-10 tw-py-10 
            tw-duration-500 ${open1 ? "tw-left-0" : "  tw-left-[-100%]"}
          `}
        >
         

          <div className="tw-pb-5 tw-px-8">
            <img
              src={require("../../assets/images/logo1.png")}
              width={80}
              className="tw-object-contain "
              alt="Logo"
            />
          </div>

          <ul className="tw-p-0 tw-relative tw-px-9 tw-pt-3 tw-border-t">
          <li>
            <Link
              className=" tw-text-white"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => {
                 setOpen(false);
                handleNavigate("/", "aboutSection")}}
              className="tw-text-white"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => {
                setOpen(false);
                handleNavigate("/", "tokenSection")}}
              className="tw-text-white"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() =>{
                setOpen(false);
                handleNavigate("/", "roadSection")}}
              className="tw-text-white"
            >
              Road Map
            </Link>
          </li>
          <li>
            <Link   to={"/"}
              onClick={() =>{
                setOpen(false);
                handleNavigate("/", "teamSection")}}
              className="tw-text-white">
              Team
            </Link>
          </li>
          <li>
            <Link to={"/staking"} className="tw-text-white">
              Staking
            </Link>
          </li>
          
            <li>
              <Link
                to={"/"}
                onClick={() => {
                  handleNavigate("/", "teamSection");

                  setOpen(false);
                }}
                className="tw-text-white"
              >
                Team
              </Link>
            </li>

            <li className=" tw-pt-5">
            <Button  
            onClick={() => open()} 

            className={''}
            Icons={<FaRegUser color="white" />}
            label={!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}
          />
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
