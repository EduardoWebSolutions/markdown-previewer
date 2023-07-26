import MaximizeIcon from "../assets/MaximizeIcon";
import MinimizeIcon from "../assets/MinimizeIcon";
import React, { useState } from "react";

const MinMax: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      {active ? (
        <MinimizeIcon onClick={handleActive} className="active" />
      ) : (
        <MaximizeIcon onClick={handleActive} className="active" />
      )}
    </>
  );
};

export default MinMax;
