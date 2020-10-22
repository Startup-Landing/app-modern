// import { useEffect } from 'react';
// import Router from 'next/router';
// import { initGA, logPageView } from 'analytics';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
// Load DM Sans typeface
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  // useEffect(() => {
  //   initGA();
  //   logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
