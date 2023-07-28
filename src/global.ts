import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {

}
* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: #87B5B5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background: #87b5b5;
    margin: 10px 0;
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

.toolbar {
    background-color: #4AA3A3;
    font-family: Russo One;
    display: flex;
    align-items: center;
    padding: 7px;
    justify-content: space-between;
    border: 1px solid black;
}

.maximize, .minimize {
    cursor: pointer;
    position: relative;
    
}

.maximize:hover, .minimize:hover {
    fill: green;
}

.active {
   cursor: pointer;
}

.active:hover {
    fill: lightgreen;
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

<<<<<<< HEAD

=======
#editorWrap {
    box-sizing: border-box;
    min-width: 600px;
    max-width: 600px;
    margin: auto;
}
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0

#editorWrap textarea {
    background-color: #c0d8d8;
    border: 1px solid #1d2f2f;
    box-shadow: 1px 1px 10px 2px #3a5f5f;
    border-top: none;
}

#previewerWrap {
<<<<<<< HEAD

=======
    background-color: #C0D8D8;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.75);
    border: 1px solid black;
    max-width: 800px;
    min-width: 800px;
    margin: 1.25rem auto;
    min-height: 200px;
    overflow-wrap: break-word;
>>>>>>> 2c2e6a850637be18f64ec0e8561fd385ed2e9de0
}

#previewerWrap-2 {
    padding: 15px;
}


`;

export default GlobalStyle;
