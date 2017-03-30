import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @font-face {
        font-family: 'Open Sans';
        src: url('./fonts/OpenSans-Regular.ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url('./fonts/OpenSans-Italic.ttf');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url('./fonts/OpenSans-Semibold.ttf');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url('./fonts/OpenSans-SemiboldItalic.ttf');
        font-weight: bold;
        font-style: italic;
    }

    body {
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    }
`;
