import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


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

textarea {
    background-color: #C0D8D8;
    width: 640px;
    min-height: 200px;
    resize: vertical;
    box-sizing: border-box;
    border: 1px solid black;
}

#toolbar {
    background-color: #4AA3A3;
    border: 2px solid black;
    font-family: Russo One;
}

#previewerWrap {
    background-color: #C0D8D8;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.75);
}

#editorWrap {
    box-sizing: border-box;
    width: 640px;
    margin-bottom: 10px;
    box-shadow: 0px -50px 90px 20px rgba(0,0,0,0.6);
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

`;

export default GlobalStyle;
