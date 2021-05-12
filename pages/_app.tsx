import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  </ThemeProvider>
);

export default MyApp;
