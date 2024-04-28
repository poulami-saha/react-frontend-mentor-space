import { useEffect, useState } from "react";
import Launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import LaunchMobile from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceportMobile from "../assets/technology/image-spaceport-landscape.jpg";
import Capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import CapsuleMobile from "../assets/technology/image-space-capsule-landscape.jpg";
import useScreenSize from "../hooks/useScreenSize";
const Vehicles = [
  {
    id: 1,
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: Launch,
    imageMobile: LaunchMobile,
  },
  {
    id: 2,
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: Spaceport,
    imageMobile: SpaceportMobile,
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: Capsule,
    imageMobile: CapsuleMobile,
  },
];

const Technology = () => {
  const { width } = useScreenSize();
  const [desktopView, setDesktopView] = useState(false);
  const [currentTech, setCurrentTech] = useState(Vehicles[0]);

  useEffect(() => {
    if (width > 1024) {
      setDesktopView(true);
    }
      else {
      setDesktopView(false);
    }
  }, [width]);

  if (desktopView) {
    return (
      <div className="mx-32 h-3/4">
        <p className="text-white font-barlowCondensed text-xl mb-10 mt-10 tracking-wider">
          <span className="mr-5 text-gray-400">03</span> SPACE LAUNCH 101
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
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
              <p className="text-[#D0D6F9] font-barlowCondensed text-lg font-normal">
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
  } else {
    return (
      <div className="h-3/4 overflow-y-auto overflow-x-hidden">
        <p className="text-white font-barlowCondensed text-xl my-10 mx-20 tracking-wider">
          <span className="mr-5 text-gray-400">03</span> SPACE LAUNCH 101
        </p>
        <img src={currentTech.imageMobile} className="w-full" />
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center ">
            <div className="flex flex-row gap-8 mt-10">
              {Vehicles.map((vehicle, index) => {
                return (
                  <p
                    className={`cursor-pointer w-12 h-12 rounded-full border border-gray-500 flex 
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
            <div className="flex flex-col items-center mt-5 mx-20">
              <p className="text-[#D0D6F9] font-barlowCondensed text-lg font-normal">
                THE TERMINOLOGY…
              </p>
              <p className="text-white font-bellefair text-3xl font-normal mt-3">
                {currentTech.name}
              </p>
              <p className=" font-barlow text-md font-normal mt-4 leading-8 w-80 justify-center items-center text-[#D0D6F9]">
                {currentTech.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Technology;
