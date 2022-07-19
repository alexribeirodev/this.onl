import Head from "next/head";
import Footer from "../footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>THIS.ONL</title>
                <meta name="description" content="Free url shortener" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
