import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: #87B5B5;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 300px;
    height: 184px;
}

h1 {
    border-bottom: 2px solid #224B4B;
}

h2 {
    border-bottom: 1px solid #224B4B;
}

textarea {
    background-color: #C0D8D8;
    width: 640px;
    height: auto;
    resize: vertical;
    min-height: 200px;
}

textarea:focus {
    outline: none;
}

#editorWrap {
    box-sizing: border-box;
    width: 640px;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.75);
    margin: auto;
    border: 1px solid black;
}
.toolbar {
    background-color: #4AA3A3;
    border-bottom: 1px solid black;
    font-family: Russo One;
    display: flex;
    align-items: center;
    padding: 7px;
    justify-content: space-between;
}

#previewerWrap {
    background-color: #C0D8D8;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.75);
    border: 1px solid black;
}
#previewerWrap-2 {
    padding: 15px;
}


code {
    background-color: white;
    font-weight: bold;
}

pre {
    background-color: white;
    margin: 10px;
    padding: 10px;
}

table, th, td {
    border: 1px solid black;
    padding: 1px;
  }

  blockquote {
    width: auto;
    border-left: 3px solid black;
    padding-left: 5px;
    color: #4AA3A3;
  }

  .maximizer {
    cursor: pointer;
    color: red;
  }
  .markLogo {
    margin-right: 5px;
  }

  .toolbar-title {
    display: flex;
    align-items: center;
  }

`;

export default GlobalStyle;
