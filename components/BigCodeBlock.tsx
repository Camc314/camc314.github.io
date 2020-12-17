import React from "react";
import CodeBlock from "./CodeBlock";
import styles from "./BigCodeBlock.module.css";

export default function BigCodeBlock() {
  return (
    <div style={{ perspective: "700px", width: "100%" }}>
      <div
        style={{
          display: "flex",
          transform: "rotate3d(0.5, -0.866, 0, 15deg) rotate(-1deg)",
        }}
      >
        <CodeBlock type="code" />
        <div className={styles.extraBlock}>
          <CodeBlock marginLeft="1em" type="output" />
        </div>
      </div>
    </div>
  );
}
