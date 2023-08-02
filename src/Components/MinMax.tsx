import { MinMaxProps } from "../../utils/Types";
import MaximizeIcon from "../assets/MaximizeIcon";
import MinimizeIcon from "../assets/MinimizeIcon";
import React, { useState } from "react";

const MinMax: React.FC<MinMaxProps> = ({ toggleMaximize, whoIsMaximized }) => {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  const handleMaximized = () => {
    setIsMaximized((prevIsMaximized) => !prevIsMaximized);
  };

  const handleWhoIsMaximized = () => {
    handleMaximized();
    toggleMaximize(whoIsMaximized);
  };
  return (
    <>
      {isMaximized ? (
        <MinimizeIcon onClick={handleWhoIsMaximized} />
      ) : (
        <MaximizeIcon onClick={handleWhoIsMaximized} />
      )}
    </>
  );
};

export default MinMax;
