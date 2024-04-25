import Commander from "../assets/crew/image-douglas-hurley.png";
import Specialist from "../assets/crew/image-mark-shuttleworth.png";
import Pilot from "../assets/crew/image-victor-glover.png";
import Engineer from "../assets/crew/image-anousheh-ansari.png";
import { useState } from "react";

const Crews = [
  {
    id: 0,
    designation: "COMMANDER",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: Commander,
  },
  {
    id: 1,
    designation: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: Specialist,
  },
  {
    id: 2,
    designation: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: Pilot,
  },
  {
    id: 3,
    designation: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: Engineer,
  },
];

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(Crews[0]);

  return (
    <div className="md:mx-1 lg:mx-24 h-3/4">
      <p className="text-white font-barlow-condensed text-xl my-1 md:my-10 mx-12  tracking-wider">
        <span className="text-gray-400">02</span> MEET YOUR CREW
      </p>
      <div
        className="flex flex-col-reverse md:flex-col items-center lg:flex-row lg:justify-between mx-5 md:ml-10"
        key={currentCrew.name}
      >
        <div className="flex flex-col-reverse md:flex-col items-center mt-8 md:mt-2 lg:mt-0 lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-white font-bellefair text-lg md:text-2xl font-normal opacity-50 ">
              {currentCrew.designation}
            </p>
            <p className="text-white font-bellefair  text-3xl md:text-5xl font-normal mt-1 md:mt-4">
              {currentCrew.name}
            </p>
            <p className="text-[#D0D6F9] text-center lg:text-left font-barlow text-md md:text-lg mt-1 md:mt-7 w-92 lg:w-80">
              {currentCrew.description}
            </p>
          </div>
          <div className="flex mt-2 md:mt-8 lg:mt-24 gap-3">
            {Crews.map((crew, index) => {
              return (
                <p
                  className={`w-3 h-3 rounded-full border border-gray-500 flex 
           justify-center items-center text-xl font-bellefair mb-4 ${
             currentCrew.id === index ? `bg-white` : `bg-gray-500`
           }`}
                  key={crew.name}
                  onClick={() => setCurrentCrew(crew)}
                ></p>
              );
            })}
          </div>
        </div>
        <img src={currentCrew.image} className="lg:ml-20 w-52 md:w-96" />
      </div>
    </div>
  );
};
export default Crew;
