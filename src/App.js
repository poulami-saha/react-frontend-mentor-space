import Navbar from "./components/navbar";
import useScreenSize from "./hooks/useScreenSize";
import DesktopBackground from "./assets/home/background-home-desktop.jpg";
import TabletBackground from "./assets/home/background-home-tablet.jpg";
import MobileBackground from "./assets/home/background-home-mobile.jpg";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Technology from "./components/technology";
import Destination from "./components/destination";
import Crew from "./components/crew";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const screenSize = useScreenSize();
  const [backgroundImage, setBackgroundImage] = useState();

  const getBackgroundImage = () => {
    const screenWidth = screenSize.width;
    switch (true) {
      case screenWidth >= 360 && screenWidth < 767:
        return MobileBackground;
      case screenWidth > 768 && screenWidth < 1023:
        return TabletBackground;
      case screenWidth > 1024: {
        return DesktopBackground;
      }
    }
  };

  useEffect(() => {
    if (
      pathname.includes("destination") ||
      pathname.includes("crew") ||
      pathname.includes("technology")
    ) {
      setBackgroundImage(null);
    } else {
      const image = getBackgroundImage();
      setBackgroundImage(image);
    }
  }, [screenSize.width]);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "black",
        // width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
