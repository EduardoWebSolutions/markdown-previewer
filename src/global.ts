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
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--sutil-color);
    background-color: var(--primary-color);
    text-align: left;
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
    background-color: #F8F8FF;
}

table {
    border-collapse: collapse;
  }

th, td {
	border: 2px solid black;
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
    margin-left: 3px;
}

.minmax:hover {
    fill: var(--hover-color);
}

.center {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.center svg {
    margin-right: 8px;
}

.markLogo {
    margin-right: 5px;
}

.copy:hover {
    cursor: pointer;
    fill: white;
}
`;

export default GlobalStyle;
