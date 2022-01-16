import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [cat, setCat] = useState(null);

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    console.log({ data: data });
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      <Head>
        <title>{id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cat && (
        <div className="flex mt-5 items-center">
          <img className="w-80" src={cat.image.url} alt={cat.image.alt} />
          <div className="mx-5">
            <h1 className="text-3xl">{cat.name}</h1>
            <p className="mt-4">{cat.description} </p>
          </div>
        </div>
      )}
    </div>
  );
}