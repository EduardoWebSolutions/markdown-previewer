import React from "react";
import MinMax from "./MinMax";
import MarkdownLogo from "../assets/MarkdownLogo";
import { ToolbarProps } from "../../utils/Types";

const Toolbar: React.FC<ToolbarProps> = ({ name, toggleActive, isActive }) => {
  return (
    <div className="toolbar">
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <MinMax toggleActive={toggleActive} isActive={isActive} />
    </div>
  );
};

export default Toolbar;
