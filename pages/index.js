import Head from "next/head";
import Wellcome from "../components/Wellcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wellcome />
    </div>
  );
}
