import React, { useState } from "react";
import MinMax from "./MinMax";
import MarkdownLogo from "../assets/MarkdownLogo";
import { ToolbarProps } from "../../utils/Types";
import { styled } from "styled-components";
import CopyIcon from "../assets/CopyIcon";
import CheckedIcon from "../assets/CheckedIcon";

const StyledToolbar = styled.div`
  background-color: var(--secondary-color);
  font-family: Russo One;
  display: flex;
  align-items: center;
  padding: 7px;
  justify-content: space-between;
  border: 1px solid var(--table-color);
`;

const Toolbar: React.FC<ToolbarProps> = ({
  name,
  toggleActive,
  isActive,
  text,
}) => {
  const [viewCopied, setViewCopied] = useState<boolean>(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handle2 = (text: string) => {
    copy(text);
    setViewCopied(true);
    setTimeout(function copyd() {
      setViewCopied(false);
    }, 2000);
  };

  return (
    <StyledToolbar>
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <div className="center">
        {viewCopied ? (
          <>
            <CheckedIcon />
            Copied
          </>
        ) : (
          <CopyIcon onClick={() => handle2(text)} />
        )}
        <MinMax toggleActive={toggleActive} isActive={isActive} />
      </div>
    </StyledToolbar>
  );
};

export default Toolbar;
