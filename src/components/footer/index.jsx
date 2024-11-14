import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-[#0f0f0f]">
        <div className="container tw-py-10">
          <div className="row tw-items-center">
            <div className="col-md-12 md:tw-text-start  tw-text-center">
              <img width={120} src={require("../../assets/images/logo1.png")} className="tw-mx-auto" />
              <ul className=" tw-pt-6 tw-p-0 tw-flex  tw-justify-center tw-gap-5 tw-items-center">
                <li>
                  <Link to={'https://x.com/ApesRun_'}>
                    <img src={require("../../assets/images/x1.png")} width={24} />
                  </Link>
                </li>
                <li>
                  <Link to={'https://t.me/ApesRun'}>
                    <img src={require("../../assets/images/telegram1.png")} width={24} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://www.instagram.com/apesrun_'} >
                  <img src={require("../../assets/images/insta1.png")} width={24} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://www.reddit.com/user/ApesRun/'} >
                  <img src={require("../../assets/images/reddit1.png")} width={24} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://www.linkedin.com/company/apesrun'} >
                  <img src={require("../../assets/images/linkedin1.png")} width={24} />
                  </Link>
                </li>

                <li>
                  <Link to={'https://www.youtube.com/@ApesRun'} >
                  <img src={require("../../assets/images/youtube1.png")} width={24} />
                  </Link>
                </li>

              </ul>
              <p className=" sm:tw-text-xl tw-text-sm tw-text-white tw-pt-6 tw-text-center">
              Apesrun Address : <span style={{ color:"#F0C238" }}>0x2FbdD419f6a00d0113BF0d8618BA22E425540d72</span>
              </p>

            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
