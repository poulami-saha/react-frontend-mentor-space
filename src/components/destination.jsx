import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";
import { useState } from "react";
const planets = {
  MOON: {
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400",
    travelTime: "3 DAYS",
    image: Moon,
  },
  MARS: {
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    travelTime: "9 MONTHS",
    image: Mars,
  },
  EUROPA: {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    travelTime: "3 YEARS",
    image: Europa,
  },
  TITAN: {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    travelTime: "7 YEARS",
    image: Titan,
  },
};

const Destination = () => {
  const [{ name, description, distance, travelTime, image }, setDestination] =
    useState(planets.MOON);
  return (
    <div>
      <p className="text-white font-barlow-condensed text-xl my-1 md:my-10 mx-16 tracking-wider">
        <span className="mr-5 text-gray-400">01</span> PICK YOUR DESTINATION
      </p>
      <div className="flex flex-col items-center lg:flex-row lg: justify-items-stretch overflow-y-auto lg:mx-32">
        <img
          src={image}
          className="h-1/3 w-1/3  md:h-full lg:w-1/3 mx-20 mb-5 md:mb-20"
        />
        <div className="lg:ml-10 flex flex-col items-center">
          <div className="flex gap-8">
            {Object.keys(planets).map((planet) => {
              return (
                <p
                  key={planet}
                  className="text-white font-barlow-condensed text-sm md:text-lg font-normal"
                  onClick={() => setDestination(planets[planet])}
                >
                  {planet}
                </p>
              );
            })}
          </div>
          <p className="font-bellefair text-4xl md:text-8xl text-white my-3 md:my-6 font-normal">
            {name}
          </p>
          <p className="font-barlow text-center text-[#D0D6F9] text-md md:text-lg lg:text-xl w-80 md:w-96">
            {description}
          </p>
          <div class="divide-y h-3 divide-[#979797]"></div>
          <div className="flex flex-col  text-center gap-8 md:flex-row mt-5 md:mt-20 md:gap-16">
            <div className="flex flex-col">
              <p className="text-[#D0D6F9] text-sm font-barlow-condensed">
                AVG. DISTANCE
              </p>
              <p className="text-white text-xl md:text-2xl font-bellefair">{distance} KM</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#D0D6F9] text-sm font-barlow-condensed">
                EST. TRAVEL TIME
              </p>
              <p className="text-white text-xl md:text-2xl font-bellefair">{travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
