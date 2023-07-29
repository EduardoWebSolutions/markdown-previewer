import { MinMaxProps } from "../../utils/Types";
import MaximizeIcon from "../assets/MaximizeIcon";
import MinimizeIcon from "../assets/MinimizeIcon";
import React, { useState } from "react";

const MinMax: React.FC<MinMaxProps> = ({ toggleActive, isActive }) => {
  const [actived, setActived] = useState<boolean>(false);
  const handleActived = () => {
    setActived((prevActived) => !prevActived);
  };

  const handleTwo = () => {
    handleActived();
    toggleActive(isActive);
  };
  return (
    <>
      {actived ? (
        <MinimizeIcon onClick={handleTwo} />
      ) : (
        <MaximizeIcon onClick={handleTwo} />
      )}
    </>
  );
};

export default MinMax;
