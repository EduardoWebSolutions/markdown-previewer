import MaximizeIcon from "../assets/MaximizeIcon";
import MinimizeIcon from "../assets/MinimizeIcon";
import React, { useState } from "react";

const MinMax: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  const changeClasses = () => {
    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");

    if (element1 && element2) {
      element1.classList.toggle("active");
      element1.classList.toggle("hidden");
      element2.classList.toggle("active");
      element2.classList.toggle("hidden");
    }
  };
  const actionButton = () => {
    changeClasses();
    handleActive();
  };

  return (
    <>
      {active ? (
        <MinimizeIcon
          id={changeClasses}
          onClick={actionButton}
          className="active"
        />
      ) : (
        <MaximizeIcon
          id={changeClasses}
          onClick={actionButton}
          className="active"
        />
      )}
    </>
  );
};

export default MinMax;
