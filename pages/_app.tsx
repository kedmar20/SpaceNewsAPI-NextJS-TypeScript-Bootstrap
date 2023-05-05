import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css"; //default from next
import type { AppProps } from "next/app"; //default from next
import { Inter } from "next/font/google"; //default from next
import Head from "next/head"; //default from next
import { Container } from "react-bootstrap";
import styles from "@/styles/App.module.css"; //default from next
import NavBar from "@/components/NavBar";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] }); //default from next

export default function App({ Component, pageProps }: AppProps) {
   //default from next
   return (
      <div className={`${styles.main} ${inter.className}`}>
         {/* ${inter.className} // default from next */}
         <Head>
            <title key="title">Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
         </Head>
         <NextNProgress />
         <NavBar />
         <Container className={styles.pageContainer}>
            <Component {...pageProps} />
            {/*Component {...pageProps} //default from next*/}
         </Container>
      </div>
   );
}
