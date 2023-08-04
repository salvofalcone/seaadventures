import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Error.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>SeaAdventuree - 404</title>
        <meta name="description" content="SeaAdventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main className={styles.Main}>
        <h1>404</h1>
        <p>Get lost?</p>
        <p>Swim  <Link href={"/"}> home! </Link></p>
      </main>
    </>
  );
}
