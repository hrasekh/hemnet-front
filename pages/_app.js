import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Menu from 'components/Menu';
import { Container } from 'reactstrap';
import Footer from 'components/Footer';
import Head from 'next/head';

// import Head from "next/head";
// import "../css/customcss.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
