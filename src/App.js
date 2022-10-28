import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMeduimScreens = useMediaQuery("min-width: 1060px")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
      </div>
      <div>
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
