import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Log } from "../components/Log";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  console.log(props.title);
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{props.page} page</h1>
      <p>
        Hello started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
      <Log />
    </div>
  );
}
