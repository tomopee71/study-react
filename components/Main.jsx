import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "./Links";
import { Center } from "./Center";
import { Headline } from "./Headline";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {

  useEffect(()=> {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
    console.log("アンマウント時");
    document.body.style.backgroundColor = "";
    };
  },[]);

  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Center />
      <Links />
    </main>
  );
}
