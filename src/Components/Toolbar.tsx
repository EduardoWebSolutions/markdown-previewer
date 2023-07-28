import React from "react";
import MinMax from "./MinMax";
import MarkdownLogo from "../assets/MarkdownLogo";
import { ToolbarProps } from "../../utils/Types";

const Toolbar: React.FC<ToolbarProps> = ({
  name,
  onMinMaxClick,
  isMinimized,
}) => {
  return (
    <div className="toolbar">
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <MinMax onClick={onMinMaxClick} active={!isMinimized} />
    </div>
  );
};

export default Toolbar;
