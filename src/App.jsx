import { useState, createContext } from "react";
import { MainControls } from "./components/MainControls";
import { SmartHome } from "./components/SmartHome";

export const SmartHomeContext = createContext();

export function App() {
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(true);

  const handleAllOn = () => {
    setFirstLightOn(true);
    setSecondLightOn(true);
    setThirdLightOn(true);
  };

  const handleAllOff = () => {
    setFirstLightOn(false);
    setSecondLightOn(false);
    setThirdLightOn(false);
  };

  return (
    <div>
      <SmartHomeContext.Provider
        value={{
          firstLightOn,
          secondLightOn,
          thirdLightOn,
          toggleFirstLight: () => setFirstLightOn(!firstLightOn),
          toggleSecondLight: () => setSecondLightOn(!secondLightOn),
          toggleThirdLight: () => setThirdLightOn(!thirdLightOn),
        }}
      >
        <MainControls onAllOnClick={handleAllOn} onAllOffClick={handleAllOff} />
        <SmartHome />
      </SmartHomeContext.Provider>
    </div>
  );
}
