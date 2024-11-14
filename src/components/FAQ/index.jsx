import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is Apes Run?",
      data:<div>
        <p>
        Apes Run is an engaging mobile app game inspired by the mechanics of "Hamster." Players advance through levels by clicking, earning APS tokens that can be cashed out or used for in-game enhancements.
        </p>
      </div>,
      isOpen: false,
    },
    {
      key: 2,
      title: "On which platforms is Apes Run available?",
      data:<div>
        <p> Apes Run is available on both iOS and Android devices, making it accessible to a wide range of users.</p>
        
      </div>,
      isOpen: false,
    },
    {
      key: 3,
      title: "How do players earn APS tokens?",
      data:<div>
        <p>Players earn APS tokens based on their performance and progress in the game. The more you play, the more tokens you can earn.</p>
      </div>,
      isOpen: false,
      // link:'Click here.'
    },
    {
      key: 4,
      title: "Can APS tokens be converted to real money?",
      data: <div>
        <p>Yes, APS tokens can be exchanged for real-world currency, including USDT (Tether), providing tangible value to your in-game achievements.</p>
      
      </div>,
      isOpen: false,
    },
    {
      key: 5,
      title: "What are in-app purchases?",
      data: "Players can purchase boosts to accelerate their token earnings. The app returns 90% of the expenditure back to players in APS tokens once the boost system is activated.",
      isOpen: false,
    },
    {
      key: 6,
      title: "How do APS token holders generate revenue?",
      data:<div>  
        <p> More tokens used can increase the token price based on blockchain technology algorithms. Additionally, staking and an MLM system help boost sales and generate wealth for participants.</p>
      </div>,
      isOpen: false,
    },

    {
      key: 7,
      title: "What makes Apes Run appealing to players and long-term token holders?",
      data:<div>  
        <p> Apes Run combines gaming with blockchain technology, offering diverse revenue streams and the potential for significant growth. This provides an exciting opportunity for players and long-term token holders.</p>
      </div>,
      isOpen: false,
    },
    {
      key: 8,
      title: "Is there a competitive aspect to the game?",
      data:<div>  
        <p> Yes, players can compete globally on leaderboards, driving continuous engagement and fostering a sense of community.
</p>
      </div>,
      isOpen: false,
    },
    
    {
      key: 9,
      title: "How does Apes Run ensure scalability?",
      data:<div>  
        <p> The app is built on a scalable platform, allowing it to accommodate rapid user growth and the introduction of new features and expansions.</p>
      </div>,
      isOpen: false,
    },

    
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className=" tw-bg-[#0f0f0f]     tw-bg-no-repeat tw-w-full tw-bg-cover   tw-h-auto tw-py-20">
      <div className=" container">
        <div className="row tw-items-center">
          <div className="col-lg-6 col-md-12">
            <h2 className="tw-text-[#F0C238] "> FAQS</h2>
            <h1 className=" tw-font-medium tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#F0C238]">
              Frenquently Questions
            </h1>
            <div className=" tw-text-white tw-mt-12">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={
                    <div className=" tw-text-white">
                      {accordion.data}
                      <Link to={`${accordion.link}`}>{accordion.link}</Link>
                    </div>
                  }
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12   md:tw-pt-32 tw-pt-0 tw-relative">
            <div className="row">
              <div className="col-md-12  tw-mx-auto">
                <div className="row">
                  <div className="col-md-10 tw-mx-auto">
                    <img
                    width={500}
                      src={require("../../assets/images/faq.PNG")}
                      className=" "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
