import HomePage from "@/components/HomePage/HomePage";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheet Sheet</title>
      </Head>
      <HomePage />
    </>
  );
}
