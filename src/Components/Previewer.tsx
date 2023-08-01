import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PreviewerProps } from "../../utils/Types";
import Toolbar from "./Toolbar";
import { styled } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PreviewerWrap = styled.div`
  background-color: #c0d8d8;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  max-width: 800px;
  min-width: 800px;
  margin: 1.24rem auto;
  min-height: 200px;
`;

const PreviewerDiv = styled.div`
  margin: 1em;
`;

//OLD margin (margin: 1.25rem auto;)
const Previewer: React.FC<PreviewerProps> = ({
  text,
  toggleActive,
  isActive,
}) => {
  return (
    <PreviewerWrap
      className={isActive === 2 ? "active" : isActive === 3 ? "hidden" : ""}
    >
      <Toolbar
        name="Previewer"
        toggleActive={toggleActive}
        isActive={isActive}
      />
      <PreviewerDiv id="preview">
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={docco}
                  language="javascript"
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </PreviewerDiv>
    </PreviewerWrap>
  );
};

export default Previewer;
