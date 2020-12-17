import React, { useEffect, useState } from "react";
import styles from "./CommandLine.module.css";

const data1 = [
  "Hi, I'm Cameron, this site shows some of the projects that I have worked on",
  "Click below to learn more, or scroll to view some of my other projects.",
];

export default function commandLine() {
  const [data, setData] = useState([""]);

  useEffect(() => {
    runLetters();
  }, []);

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const runLetters = async () => {
    for (const k in data1) {
      for (let i = 0; i < data1[k].length; i++) {
        if (k === "1") {
          setData([data1[0], data1[1].slice(0, i)]);
        } else {
          setData([data1[0].slice(0, i)]);
        }
        await timeout(50);
      }
      await timeout(300);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div
          className={styles.headerButton}
          style={{ backgroundColor: "#FD665E" }}
        />
        <div
          className={styles.headerButton}
          style={{ backgroundColor: "#FDD022" }}
        />
        <div
          className={styles.headerButton}
          style={{ backgroundColor: "#1BDB3D" }}
        />
      </div>
      <div className={styles.codeContent}>
        <p>{"  >"} Run Introduction...</p>
        {data.map((line, i) => (
          <p key={`cmd-line-${i}`}>{line}</p>
        ))}
      </div>
    </div>
  );
}
