import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  },[]);

  return (
    <>
      <Head>
        <title>index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
    </>
  );
}
