import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, 
body {
    height: 100%;
}
body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--textNormal);
  font-size: 10px;

  --textNormal: rgba(0, 0, 0, 0.7);
  --textTitle: #303030;
  --link: #542c85;
  --bgBrand: #f5f6fa;
  --primary: #0899ac;
  --lightPrimary: #e8f5f7;
  --alert: #e47870;
  --lightAlert: #ffe0de;

  h1 {
    font-family: 'Girassol', cursive;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--textTitle);
  }
  input,
  button,
  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a {
  color: var(--link);
  }
  input:focus,
  button:focus,
  a:focus {
      outline: none;
  }
  img {
    padding: 0;
    margin: 0;
    user-select: none;
  }
  #root {
      height: 100%;
  }
}`;
