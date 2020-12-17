import React from "react";
import styles from "./CodeBlock.module.css";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const data = [
  [
    { color: "#ffd213", width: "20%" },
    { color: "#00ffee", width: "30%" },
    { color: "#00ff1a", width: "19%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#ff0606", width: "15%" },
    { color: "#ffd213", width: "25%" },
    { color: "#00ffee", width: "10%" },
    { color: "#ff4d00", width: "25%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#f0f", width: "5%" },
    { color: "#00ff1a", width: "17%" },
    { color: "#f0f", width: "21%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "", width: "10%" },
    { color: "#ffd213", width: "10%" },
    { color: "#ff0606", width: "30%" },
    { color: "#00ff1a", width: "14%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#00ffee", width: "10%" },
    { color: "#ff4d00", width: "25%" },
    { color: "#f0f", width: "10%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#f0f", width: "15%" },
    { color: "#00ff1a", width: "15%" },
  ],
  [],
  [
    { color: "#00ff1a", width: "20%" },
    { color: "#ff4d00", width: "30%" },
    { color: "#00ffee", width: "19%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#ff0606", width: "5%" },
    { color: "#ff4d00", width: "17%" },
    { color: "#00ff1a", width: "21%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "", width: "10%" },
    { color: "#00ff1a", width: "10%" },
    { color: "#ffd213", width: "30%" },
    { color: "#ff4d00", width: "14%" },
  ],
  [
    { color: "", width: "10%" },
    { color: "#ffd213", width: "15%" },
    { color: "#ff4d00", width: "15%" },
  ],
];

export default function CodeBlock({
  type,
  marginLeft,
}: {
  type?: string;
  marginLeft?: string;
}) {
  return (
    <div style={{ marginLeft: marginLeft, width: "100%" }}>
      {type === "code" ? (
        <div className={styles.container}>
          {" "}
          <div style={{ padding: "4px" }}>
            <div className={styles.codeHeader}>
              <span>Input</span>
              <span className={styles.runButton}>Run</span>
            </div>
            <div className={styles.codeContainer}>
              {data.map((line, lineIndex) => (
                <div key={`L${lineIndex}`} className={styles.lineOfCode}>
                  {line.map((item, itemIndex) => (
                    <div
                      key={`L${lineIndex}-I${itemIndex}`}
                      className={styles.codeItem}
                      style={{ backgroundColor: item.color, width: item.width }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      {type === "output" ? (
        <div className={styles.container}>
          <div style={{ padding: "4px" }}>
            <div className={styles.codeHeader}>
              <span>Output</span>
              <span className={styles.runButton}>Confirm</span>
            </div>
            <div className={styles.codeContainer}>
              <div className={styles.testCase}>
                <IoIosCheckmarkCircleOutline color="greenyellow" size={25} />
                <div
                  className={`${styles.testCaseResult} ${styles.success}`}
                ></div>
              </div>
              <div className={styles.testCase}>
                <IoIosCloseCircleOutline color="#ff6565" size={25} />
                <div
                  className={`${styles.testCaseResult} ${styles.failure}`}
                ></div>
              </div>
              <div className={styles.testCase}>
                <IoIosCheckmarkCircleOutline color="#85ff62" size={25} />
                <div
                  className={`${styles.testCaseResult} ${styles.success}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
