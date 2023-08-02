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
  user-select: none;
`;

const Toolbar: React.FC<ToolbarProps> = ({
  name,
  editorText,
  toggleMaximize,
  whoIsMaximized,
}) => {
  const [wasCopied, setWasCopied] = useState<boolean>(false);

  const copyToClipboard = (editorText: string) => {
    navigator.clipboard.writeText(editorText);
  };

  const handleCopied = (editorText: string) => {
    copyToClipboard(editorText);
    setWasCopied(true);
    setTimeout(() => {
      setWasCopied(false);
    }, 2000);
  };

  return (
    <StyledToolbar>
      <div className="center">
        <MarkdownLogo />
        {name}
      </div>
      <div className="center">
        {wasCopied ? (
          <>
            <CheckedIcon />
            Copied
          </>
        ) : (
          <CopyIcon onClick={() => handleCopied(editorText)} />
        )}
        <MinMax
          toggleMaximize={toggleMaximize}
          whoIsMaximized={whoIsMaximized}
        />
      </div>
    </StyledToolbar>
  );
};

export default Toolbar;
