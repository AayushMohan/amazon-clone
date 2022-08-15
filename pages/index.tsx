import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen 2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
      </main>
    </div>
  );
};

export default Home;
