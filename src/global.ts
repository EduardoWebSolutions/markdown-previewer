import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {

--primary-color: #87B5B5;
--secondary-color: #4AA3A3;
--tertiary-color: #224B4B;
--sutil-color: #212529;
--codeBackground-color: white;
--table-color: black;
--hover-color: lightgreen;
 
}

* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--#212529);
    background-color: var(--primary-color);
    text-align: left;
    margin: 10px 0;
}

img {
    width: 300px;
    height: 184px;
}

h1 {
    border-bottom: 2px solid var(--tertiary-color);
}

h2 {
    border-bottom: 1px solid var(--tertiary-color);
}



code {
    background-color: var(--codeBackground-color);
}

pre {
    background-color: var(--codeBackground-color);
    margin: 10px;
    padding: 10px;
}

table, th, td {
    border: 1px solid var(--table-color);
    padding: 1px;
  }

blockquote {
    width: auto;
    border-left: 3px solid var(--table-color);
    padding-left: 5px;
    color: var(--secondary-color);
  }


.minmax {
    cursor: pointer;
    position: relative;
    
}

.minmax:hover {
    fill: var(--hover-color);
}

.active {
    height: 100¨%;
}

.hidden {
    display: none;
}

.center {
    display: flex;
    align-items: center;
}

.center svg {
    margin-right: 8px;
}

.markLogo {
    margin-right: 5px;
}


#editorWrap textarea {
    background-color: #c0d8d8;
    border: 1px solid #1d2f2f;
    box-shadow: 1px 1px 10px 2px #3a5f5f;
    border-top: none;
}



`;

export default GlobalStyle;
