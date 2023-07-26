import React from "react";
import MinMax from "./MinMax";
import MarkdownLogo from "../assets/MarkdownLogo";
import { ToolbarProps } from "../../utils/Types";

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { name } = props;
  return (
    <div className="toolbar">
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <MinMax />
    </div>
  );
};

export default Toolbar;
