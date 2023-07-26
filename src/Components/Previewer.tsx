import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PreviewerProps } from "../../utils/Types";
import Toolbar from "./Toolbar";
import { styled } from "styled-components";

const PreviewerWrap = styled.div`
  background-color: #c0d8d8;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  max-width: 800px;
  min-width: 800px;
  margin: 1.25rem auto;
  min-height: 200px;
  overflow-wrap: break-word;
`;

const Previewer: React.FC<PreviewerProps> = (props) => {
  const { text } = props;
  return (
    <PreviewerWrap>
      <Toolbar name="Previewer" />

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </PreviewerWrap>
  );
};

export default Previewer;
