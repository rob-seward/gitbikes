import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/GT-Pressura-Mono-Light.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: GT-Pressura-Mono-Light.woff;
    src: url(${font});
  }
  html {
    font-family: GT-Pressura-Mono-Light, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  .center {
    text-align: center;
  }
  
`;

export default Typography;
