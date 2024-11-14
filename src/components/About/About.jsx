import React from 'react'
import Button from '../Button'
import { FaArrowRight } from 'react-icons/fa6'
// import EBM_Avenue from '../EBM_avenue'
const About = () => {


  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/whitepaper.pdf");
    window.open(pdfUrl, "_blank");
  };


  return (
    <div  id='aboutSection'  className=' tw-bg-[#0F0F0F] tw-relative tw-py-20  tw-w-full tw-h-auto'>
          
      <div className='container'>
        <div className='row  sm:tw-text-start  tw-text-center g-5 tw-items-center'>
            <div className='col-lg-7 col-md-12'>
              <span className=' tw-text-[#F0C238] tw-font-semibold tw-text-[18px] sm:tw-justify-start tw-justify-center tw-flex tw-items-center tw-gap-4'>  <p className='  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-1 tw-bg-[#456DA7]'></p> Everyone encounters difficulties</span>
            <h1 className=" tw-text-[#F0C238]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            About us
          
            </h1>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At APESRUN, we revolutionize gaming by turning clicks into cash. Inspired by successful projects, we created a platform where players earn “APES” with every interaction. Committed to community and transparency, we empower gamers to thrive financially while enjoying an engaging experience. Join us and redefine how you play!

</p>
        
{/*            
            <div className=' tw-flex tw-flex-wrap    sm:tw-justify-start tw-justify-center tw-w-full sm:tw-gap-6 tw-gap-3 tw-items-center'>
                <div className=' tw-text-center '>
                    <h1 className=' tw-font-zen-dots   sm:tw-text-3xl tw-text-[18px] tw-text-[#F0C238]'>10M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#F0C238] tw-font-medium'>People Reched</p>
                </div>
                <div className=' sm:tw-h-18 tw-h-12 tw-w-[2px] tw-bg-[#456DA7]'>

                </div>
                <div className='  tw-text-center'>
                    <h1 className=' sm:tw-text-3xl  tw-text-[18px] tw-font-zen-dots tw-text-[#F0C238]'>12M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#F0C238] tw-font-medium'>Social Media Engaement</p>
                </div>
                <div className=' sm:tw-h-18 tw-h-12 tw-w-[2px] tw-bg-[#456DA7]'>

                </div>
                <div className='  tw-text-center'>
                    <h1 className=' sm:tw-text-3xl  tw-text-[18px] tw-font-zen-dots tw-text-[#F0C238]'>8M+</h1>
                    <p className=' sm:tw-text-[14px] tw-text-[9px] tw-text-[#F0C238] tw-font-medium'>Number of Media Mention</p>
                </div>
              
            </div> */}
            <Button
                   onClick={()=>openPdfInNewTab()}
                rIcons={<FaArrowRight color="#fff" />}
                label={"White Paper"}
                className={"  tw-mt-7"}
                
              />




            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='row'>
                <div className="col-md-12 tw-mx-auto">
                   <div className=' tw-relative '> 
                    <img src={require('../../assets/images/ape2.png')}   className=' tw-w-full' alt='' />
                    
                   
                   </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='row'>
                <div className="col-md-10 tw-mx-auto">
                  <img src={require('../../assets/images/ape6.png')} alt='' />
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
            
            <h1 className=" tw-text-[#F0C238]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            Our Vision
          
            </h1>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At APESRUN, we envision a dynamic gaming platform where every click leads to financial opportunity and community engagement. We aim to create a trusted environment that empowers players to maximize their earnings while enjoying an entertaining experience, shaping a future where gaming and wealth creation go hand in hand.

</p>
        
           
            </div>




           

            <div className='col-lg-6 col-md-12'>
            
            <h1 className=" tw-text-[#F0C238]  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            Our Mission
          
            </h1>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 tw-text-xl">
            At APESRUN, our mission is to empower gamers to achieve financial success while enjoying a fun and engaging gaming experience. By allowing players to earn “APES” with every click—redeemable for cash—we create opportunities for gamers to build wealth and thrive, fostering a rewarding future for our vibrant community.


 </p>
        
           
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='row'>
                <div className="col-md-10 tw-mx-auto">
                  <img src={require('../../assets/images/ape4.png')} alt='' />
                </div>
              </div>
            </div>
           



        </div>

         
      </div>
     
      {/* <EBM_Avenue/> */}
     
    </div>
  )
}

export default About