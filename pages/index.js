import { data } from "../components/questions";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import qContext from "@/store/context";
import { useContext } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { q, setQ } = useContext(qContext);

  const checkedQ = (id) => {
    let listQ = [...q];
    listQ.push(id);
    setQ(listQ);
  };

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Questions</h1>
      <div className={styles.questions}>
        {data.map((item, index) => (
          <Link
            key={index}
            href={`/question/${item.id}`}
            className={`${styles.question} ${q.includes(item.id) ? styles.checked : ""
              }`}
            onClick={() => checkedQ(item.id)}
          >
            {item.id}
          </Link>
        ))}
      </div>
    </main>
  );
}
