import Head from "next/head";
import Wellcome from "../components/Wellcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cats App</title>
        <meta name="description" content="Cats App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wellcome />
    </div>
  );
}
