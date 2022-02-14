import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jumwoo Photography</title>
        <meta
          name="description"
          content="Realestate Photography by Justin Wooly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Jumwoo</h1>
      </main>
    </div>
  );
}
