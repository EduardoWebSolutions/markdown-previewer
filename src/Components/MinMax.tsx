import { MinMaxProps } from "../../utils/Types";
import MaximizeIcon from "../assets/MaximizeIcon";
import MinimizeIcon from "../assets/MinimizeIcon";
import React from "react";

const MinMax: React.FC<MinMaxProps> = ({ active, onClick }) => {
  // const [active, setActive] = useState<boolean>(false);
  // const handleActive = () => {
  //   setActive((prevActive) => !prevActive);
  // };

  return (
    <>
      {active ? (
        <MinimizeIcon onClick={onClick} />
      ) : (
        <MaximizeIcon onClick={onClick} />
      )}
    </>
  );
};

export default MinMax;
