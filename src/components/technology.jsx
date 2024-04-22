import { useState } from "react";
import Launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import Capsule from "../assets/technology/image-space-capsule-portrait.jpg";
const Vehicles = [
  {
    id: 1,
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: Launch,
  },
  {
    id: 2,
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: Spaceport,
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: Capsule,
  },
];
const Technology = () => {
  const [currentTech, setCurrentTech] = useState(Vehicles[0]);
  return (
    <div className="mx-32 h-3/4">
      <p className="text-white font-barlow-condensed text-xl mb-10 mt-10 tracking-wider">
        <span className="mr-5 text-gray-400">03</span> SPACE LAUNCH 101
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex flex-col mt-32">
            {Vehicles.map((vehicle, index) => {
              return (
                <p
                  className={`w-16 h-16 rounded-full border border-gray-500 flex 
         justify-center items-center text-xl font-bellefair mb-8 ${
           currentTech.id === index + 1
             ? `bg-white text-black`
             : ` text-white bg-black`
         }`}
                  key={vehicle.name}
                  onClick={() => setCurrentTech(Vehicles[index])}
                >
                  {index + 1}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col mt-32 mx-20">
            <p className="text-[#D0D6F9] font-barlow-condensed text-lg font-normal">
              THE TERMINOLOGY…
            </p>
            <p className="text-white font-bellefair text-5xl font-normal mt-3">
              {currentTech.name}
            </p>
            <p className=" font-barlow text-lg font-normal mt-4 leading-8 w-80 text-[#D0D6F9]">
              {currentTech.description}
            </p>
          </div>
        </div>

        <img src={currentTech.image} />
      </div>
    </div>
  );
};
export default Technology;
