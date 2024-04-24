const Home = () => {
  return (
    <div
      className="flex flex-col items-center lg:flex-row align-middle text-white mx-8 lg:mx-20 md:mt-60 justify-center align-items-center"
    >
      <div className="flex flex-col items-center lg:items-start lg:mb-40 lg:mr-40 ">
        <p className="font-barlow-condensed tracking-widest text-md md:text-3xl font-normal mb-2 text-[#D0D6F9]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="font-bellefair text-8xl md:text-9xl md:tracking-widest my-6 font-normal">SPACE</p>
        <p className="font-barlow text-wrap text-md font-normal  md:mx-36 lg:mx-1 lg:w-80 leading-8 text-center lg:text-justify text-[#D0D6F9]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="w-32 h-32 md:w-60 md:h-60 rounded-full flex 
 justify-center items-center bg-white mt-20 md:mt-48 lg:mt-1 mx-20"
      >
        <p className="z-1 font-bellefair text-[#0B0D17]  text-xl md:text-3xl font-normal py-6">
          EXPLORE
        </p>
      </div>
    </div>
  );
};
export default Home;
