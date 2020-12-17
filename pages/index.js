import styles from "../styles/Home.module.css";
import Header from "../components/header";
import CodeBlock from "../components/CodeBlock";
import CommandLine from "../components/CommandLine";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/projects");
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
