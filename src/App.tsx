import { useState } from "react";
import GlobalStyle from "./global";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import Footer from "./Components/Footer";
import "../utils/Types";

const EDITOR_MAXIMIZE_ID = 3;
const PREVIEWER_MAXIMIZE_ID = 2;

function App() {
  const [editorText, setEditorText] =
    useState<string>(`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!\n 
Or _italic_.\n
Or... wait for it... **_both!_**\n
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.markdownguide.org/), and
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

  const [whoIsMaximized, setWhoIsMaximized] = useState<number>(-1);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorText(e.target.value);
  };

  const toggleMaximize = (maximizeId: number) => {
    maximizeId === whoIsMaximized
      ? setWhoIsMaximized(-1)
      : setWhoIsMaximized(maximizeId);
  };

  return (
    <>
      <GlobalStyle />
      <Editor
        editorText={editorText}
        onChange={handleEditorChange}
        toggleMaximize={() => toggleMaximize(EDITOR_MAXIMIZE_ID)}
        whoIsMaximized={whoIsMaximized}
        maximizeId={EDITOR_MAXIMIZE_ID}
      />
      <Previewer
        editorText={editorText}
        toggleMaximize={() => toggleMaximize(PREVIEWER_MAXIMIZE_ID)}
        whoIsMaximized={whoIsMaximized}
        maximizeId={PREVIEWER_MAXIMIZE_ID}
      />
      <Footer />
    </>
  );
}
export default App;
