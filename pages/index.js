import Head from "next/head";
import axios from "axios";
import { server } from "../config/index";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery";

export default function Home({ images }) {
  console.log("function", images);
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
        <Gallery images={images} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const { data } = await axios.get(`${server}/api/db/gallery`);
    const images = data;

    return {
      props: {
        images,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        images: [],
      },
    };
  }
}
