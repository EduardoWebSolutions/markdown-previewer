import GlobalStyle from "./global.ts";
import Editor from "./Components/Editor.tsx";
import { useState } from "react";
import Previewer from "./Components/Previewer.tsx";

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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Editor text={text} onChange={handleChange} />
      <Previewer text={text} />
    </>
  );
}
export default App;
