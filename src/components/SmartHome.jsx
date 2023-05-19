import { Light } from "./Light";
import { useState } from "react";

export function SmartHome() {
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(false);

  const handleFirstToggle = () => {
    setFirstLightOn(!firstLightOn);
  };
  const handleSecondToggle = () => {
    setSecondLightOn(!secondLightOn);
  };
  const handleThirdToggle = () => {
    setThirdLightOn(!thirdLightOn);
  };

  return (
    <section
      style={{
        fontSize: "5rem",
        display: "grid",
        gridTemplateColumns: "min-content min-content",
        gap: "3px",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      <Light id={0} isOn={firstLightOn} onToggle={onFirstToggle} />
      <Light id={1} isOn={secondLightOn} onToggle={onSecondToggle} />
      <Light id={2} isOn={thirdLightOn} onToggle={onThirdToggle} />
    </section>
  );
}
