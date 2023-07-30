import React from "react";
import MinMax from "./MinMax";
import MarkdownLogo from "../assets/MarkdownLogo";
import { ToolbarProps } from "../../utils/Types";
import { styled } from "styled-components";

const StyledToolbar = styled.div`
  background-color: var(--secondary-color);
  font-family: Russo One;
  display: flex;
  align-items: center;
  padding: 7px;
  justify-content: space-between;
  border: 1px solid var(--table-color);
`;

const Toolbar: React.FC<ToolbarProps> = ({ name, toggleActive, isActive }) => {
  return (
    <StyledToolbar>
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <MinMax toggleActive={toggleActive} isActive={isActive} />
    </StyledToolbar>
  );
};

export default Toolbar;
