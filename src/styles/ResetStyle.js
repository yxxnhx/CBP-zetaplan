import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1;
    overflow-x: hidden;
    width: 100vw;
  }

  ol, ul ,li {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  fieldset {
    border: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  * {
    font-size: 62.5%;
    box-sizing: border-box;
  }


  @media (min-width: 768px) and (max-width: 1023px){
    * {
      font-size: 50%;
      box-sizing: border-box;
    }

  }
  @media all and (max-width: 767px){
    * {
      font-size: 40%;
      box-sizing: border-box;
    }

  }


`;

export default ResetStyle;
