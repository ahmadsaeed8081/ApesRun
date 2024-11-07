import React from "react";

const Tokenomics = () => {
  return (
    <div id="tokenSection" className="  tw-bg-[#0f0f0f]   tw-my-14">
      {/* <h1 className=" tw-text-white  tw-text-center tw-font-semibold tw-text-4xl">
        TOKENOMICS
      </h1> */}

      <div className="container ">
        <div className="row">
          <div className="col-md-12 tw-mx-auto">
          <img src={require("../../assets/images/tokenomics.png")} className=" tw-w-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
