import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`


:root {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  min-width: 250px;
  min-height: 100vh;
  background: #080112;
  /* padding: 2rem; */
  overflow-x: hidden;

}
@media (max-width: 1284px) {
  body {
    /* padding: 1rem; */
  }
}
@media (max-width: 800px) {
  body {
    /* padding: 0.5rem; */
  }
}
.layout {
  /* max-width: 1440px;
  margin: auto; */
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body.modal-open {
    position: relative;
    overflow-y: hidden;
  }

body.modal-open .carousel {
  display: none;
  content: '';
  position: relative;
  }
.carousel {
  /* display: none; */
}
a.active {
  /* background: #242729; */
  -webkit-box-shadow: 0px 0px 8px 8px #f902ed;
  -moz-box-shadow: 0px 0px 8px 8px #f906ed;
  box-shadow: 0px 0px 8px 8px #f906ed;
  color: greenyellow;
  font-weight: bold;
}
/*  */
div .active {
  background: #242729;
  border-radius: 8px;
  color: greenyellow;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`
