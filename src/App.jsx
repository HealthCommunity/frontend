// react hook , react
import React from "react";
// recoil ( 상태관리 )

// react library
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";

// styled-components , Style Files
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

// Components
import Router from "./Router";

// Icons , Images

// Share , Utils

const GlobalStyle = createGlobalStyle`
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
	border: 0;
	vertical-align: baseline;
}


article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: ${(props) => props.theme.backGroundColor};
	color: ${(props) => props.theme.reverseFontColor};
	font-family: 'Pretendard';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	margin: 0;
}
a {
	text-decoration:none;
	color:inherit;
}
`;

export default function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
