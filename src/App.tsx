import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GlobalStyle from "./global.ts";
import MarkdownLogo from "./assets/MarkdownLogo.tsx";
import MaximizeLogo from "./assets/MaximizeLogo.tsx";
import MinimizeLogo from "./assets/MinimizeLogo.tsx";

function App() {
  const [text, setText] =
    useState<string>(`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa! 
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
  
And if you want to get really crazy, even tables:
  
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
  
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
  
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)`);

  const [active, setActive] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
    console.log(active);
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <div id="editorWrap">
          <div className="toolbar">
            <div>
              <MarkdownLogo />
              Editor
            </div>
            <div>
              {active ? (
                <MaximizeLogo
                  className={active ? "active" : "hidden"}
                  onClick={handleActive}
                />
              ) : (
                <MinimizeLogo
                  className={active ? "active" : "hidden"}
                  onClick={handleActive}
                />
              )}
            </div>
          </div>
          <textarea name="" id="" onChange={handleChange}>
            {text}
          </textarea>
        </div>
        <div id="previewerWrap">
          <div className="toolbar">
            <MarkdownLogo />
            Previewer
            <MinimizeLogo
              className={active ? "active" : "hidden"}
              onClick={handleActive}
            />
          </div>
          <div id="previewerWrap-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="foo">
              {text}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
