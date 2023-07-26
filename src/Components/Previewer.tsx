import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PreviewerProps } from "../../utils/Types";
import Toolbar from "./Toolbar";

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
  );
};

export default Previewer;
