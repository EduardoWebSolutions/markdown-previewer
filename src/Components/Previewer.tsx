import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Toolbar from "./Toolbar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { styled } from "styled-components";
import { PreviewerProps } from "../../utils/Types";

const StyledPreviewWrap = styled.div`
  background-color: #c0d8d8;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  max-width: 800px;
  min-width: 800px;
  margin: 1.24rem auto;
  min-height: 200px;

  &.maximized {
    min-height: 95vh;
  }

  &.hidden {
    display: none;
  }
`;

const StyledPreviewDiv = styled.div`
  margin: 1em;
`;

const PreviewerClassNames = (whoIsMaximized: number) =>
  whoIsMaximized === 2 ? "maximized" : whoIsMaximized === 3 ? "hidden" : "";

const Previewer: React.FC<PreviewerProps> = ({
  editorText,
  toggleMaximize,
  whoIsMaximized,
}) => {
  return (
    <>
      <StyledPreviewWrap className={PreviewerClassNames(whoIsMaximized)}>
        <Toolbar
          name="Previewer"
          toggleMaximize={toggleMaximize}
          whoIsMaximized={whoIsMaximized}
          editorText={editorText}
        />
        <StyledPreviewDiv id="preview">
          <ReactMarkdown
            children={editorText}
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
        </StyledPreviewDiv>
      </StyledPreviewWrap>
    </>
  );
};

export default Previewer;
