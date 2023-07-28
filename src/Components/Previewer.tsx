import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PreviewerProps } from "../../utils/Types";
import Toolbar from "./Toolbar";
<<<<<<< HEAD
import { styled } from "styled-components";

const PreviewerWrap = styled.div`
  background-color: #c0d8d8;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  max-width: 800px;
  min-width: 800px;
  margin: ${(props) => props.theme.main};
  min-height: 200px;
  overflow-wrap: break-word;
`;

const PreviewerDiv = styled.div`
  margin: 1em;
`;

//OLD margin (margin: 1.25rem auto;)
const Previewer: React.FC<PreviewerProps> = (props) => {
  const { text, onClick } = props;
  return (
    <PreviewerWrap id="element1" className="">
      <Toolbar name="Previewer" onClick={onClick} />
      <PreviewerDiv>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </PreviewerDiv>
    </PreviewerWrap>
=======

const Previewer: React.FC<PreviewerProps> = (props) => {
  const { text } = props;
  return (
    <div id="previewerWrap">
      <Toolbar name="Previewer" />
      <div id="previewerWrap-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="foo">
          {text}
        </ReactMarkdown>
      </div>
    </div>
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
  );
};

export default Previewer;
