const Home = () => {
  return (
    <div
      className="flex text-white mx-20 mt-60 justify-center align-bottom"
    >
      <div className="flex flex-col mr-40">
        <p className="font-barlow text-3xl font-normal mb-2 text-[#D0D6F9]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="font-bellefair text-8xl my-6 font-normal">SPACE</p>
        <p className="font-barlow text-wrap text-md font-normal  leading-8 text-justify text-[#D0D6F9] w-80">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="w-60 h-60 rounded-full flex 
 justify-center items-center bg-white mt-50 mx-20"
      >
        <p className="z-1 font-bellefair text-[#0B0D17] text-3xl font-normal py-6">
          EXPLORE
        </p>
      </div>
    </div>
  );
};
export default Home;
