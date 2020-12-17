import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import ProjectItem from "../../components/ProjectItem";

const data = [
  {
    heading: "The Past",
    description: [
      "My first experience of HTML was in Primary School, likley when I was only 8 years old, when I made a simple webpage with links to some of my favorite pages. Since then, I have taken GCSE Computer Science, in which we used both Python and JavaScript for two seperate projects.",
      "Since then, I took a step away from Computer Science and took Maths, Further Maths, Physics and Chemistry for my A-Levels. However during a work placement over my summer holidays where I used an Arduino to build a prototype product, I began to code again. I started simple, by taking courses from FreeCodeCamp, but quickly moving on to contributing to open source.",
    ],
  },
  {
    heading: "The Present",
    description: [
      "I'm currently learning React, Vue, and am occasionally developing in React Native. I am a maintainer of three clients in the Jellyfin Project, therefore I review pull requests, respond to issues, and help guide the direction of the project.",
      "My learning doesn't stop at coding though. I have taken several courses in Data Structures, to solidify my knowledge of data structures, there uses, and ther Space Time Complexities. It doesn't stop there though, as with any system, scalability, and system design needs to be considered. I have taken a course in system design which covers content such as Latency and Throughput, Caching and Load Balancers.",
      "Going beyond courses, with every pull request I review, or that is reviewed, I learn more, improving my knowledge, and helping me to find better solutions to complex problems.",
    ],
  },
  {
    heading: "The Future",
    description: [
      "Over the next few years, I want to learn and grow as a software developer, learning best practices from the people around me, and learning essential skills that will help me be the best developer possible.",
      "I may not know everything now, nor ever, but there is always the ability to learn more.",
    ],
  },
];

export default function About() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.title = "About - Cameron";
  }, []);

  const handleClose = () => {
    setClosing(true);
  };

  return (
    <div>
      <div
        style={{
          width: "100vw",
          maxWidth: "100%",
          background: "#00b7ff",
        }}
        className={`${styles.shrink} ${closing ? styles.grow : ""}`}
      >
        <ProjectItem id={0} shrunk={true} onClose={handleClose} />
      </div>
      <div className={styles.contentContainer}>
        {data.map((item, itemIndex) => {
          return (
            <div
              key={`contentContainer-${itemIndex}`}
              className={styles.contentItem}
            >
              <h1>{item.heading}</h1>
              {item?.description?.map((line, index) => (
                <p key={`content-${itemIndex}-${index}`}>{line}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
