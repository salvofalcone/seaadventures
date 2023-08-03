import Head from "next/head";

import Header from "@/components/Header";
import CardList from "@/components/CardList";
import InfoSection from "@/components/InfoSection";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>SeaAdventures</title>
        <meta name="description" content="SeaAdventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Header />
        <CardList />
        <InfoSection />
      </main>
    </>
  );
}
