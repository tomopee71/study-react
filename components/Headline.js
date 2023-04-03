import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Headline.module.css";
import { Log } from "../components/Log";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{props.page} page</h1>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
      <Log />
    </div>
  );
}
