import { Carousel } from "@material-tailwind/react";
import Commander from "../assets/crew/image-douglas-hurley.png";
import Specialist from "../assets/crew/image-mark-shuttleworth.png";
import Pilot from "../assets/crew/image-victor-glover.png";
import Engineer from "../assets/crew/image-anousheh-ansari.png";

const Crews = {
  CREW_1: {
    designation: "COMMANDER",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: Commander,
  },
  CREW_2: {
    designation: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: Specialist,
  },
  CREW_3: {
    designation: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: Pilot,
  },
  CREW_4: {
    designation: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: Engineer,
  },
};

const Crew = () => {
  return (
    <div className="md:mx-32 h-3/4">
      <p className="text-white font-barlow-condensed text-xl my-2 md:my-10 mx-20 tracking-wider">
        <span className="mr-5 text-gray-400">02</span> PICK YOUR Crew
      </p>
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl overflow-y-auto md:overflow-y-hidden"
      >
        {Object.values(Crews).map((crew) => {
          return (
            <div
              className="flex flex-col items-center lg:flex-row lg:justify-between mx-5 md:ml-20"
              key={crew.name}
            >
              <div className="flex flex-col items-center mt-8 md:mt-32 lg:mt-16 lg:items-start">
                <p className="text-white font-bellefair text-lg md:text-2xl font-normal opacity-50 ">
                  {crew.designation}
                </p>
                <p className="text-white font-bellefair  text-3xl md:text-5xl font-normal mt-1 md:mt-4">
                  {crew.name}
                </p>
                <p className="text-[#D0D6F9] font-barlow text-md md:text-lg mt-1 md:mt-7 w-92 lg:w-80">
                  {crew.description}
                </p>
              </div>
              <img src={crew.image} className="mt-8 h-4/5" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Crew;
