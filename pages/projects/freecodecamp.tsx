import React, { useState } from "react";
import Image from "next/image";
import styles from "./freecodecamp.module.css";
import ProjectItem from "../../components/ProjectItem";

const data = [
  {
    heading: "FreeCodeCamp",
    description:
      "FreeCodeCamp is a nonprofit community that helps student learn to code by building projects \nThosands of people have obtained jobs at hundreds of companies as developers.",
  },
  {
    heading: "Responsive Web Design Certification",
    description:
      "This qualification focuses on the basics: HTML, HTML5, CSS, Accessibility, Flexbox and Grid. These are foundations that are essential to any developer.",
  },
  { heading: "JavaScript Algorithms and Data Structures", description: "" },
  {
    heading: "Front End Libraries",
    description:
      "To make websites easy to develop and easier to maintain, front end libraries such as React can be used. This section covers Bootstrap, jQuery, Sass, React and Redux.",
  },
  {
    heading: "APIs and Microservices",
    description:
      "To look at data, you must first have data. Focusing on Node, Express, MongoDB and Mongoos, this section allows works on providing data from an API request through the use of a database.",
  },
  {
    heading: "Quality Assurance",
    description:
      "At one point or another, it is highly likley that a piece of software will have a bug. To reduce this risk, tests can be run every time new code is written or old code is changed. This can help verify that the changes are not going to have unintended consequences.",
  },
  {
    heading: "FreeCodeCamp and Beyond",
    description:
      "Just because I have completed a range of certifications at FCC, it does not mean that my learning journey is complete. Below I have highlighted some awesome resources that I use regularly to help me learn more.",
  },
];

const data2 = [
  {
    title: "Fireship",
    description:
      "Fireship produces code tutorials condensed into a short, sharp format. It covers topics such as websockets, Docker and Kubernetes in easy to understand videos, that allow you to gain a basic understanding quickly and easily.",
    videoLink: "https://www.youtube-nocookie.com/embed/cbB3QEwWMlA",
  },
  {
    title: "Netflix JavaScript Talks",
    description:
      "Netflix have produced a series of talks on JavaScript by the UI Engineering team. The talks highlight their experience with Node.js, React, Redux and many of the other tools they use.",
    videoLink: "https://www.youtube-nocookie.com/embed/WLqc0EX8Bmg",
  },
  {
    title: "Vsauce",
    description:
      '"Our World is Amazing." Vsauce1, hosted by Michael Stevens, celebrates curiosity by investigating out-of-the ordinary questions in fun thought-provoking ways. ',
    videoLink: "https://www.youtube-nocookie.com/embed/Xc4xYacTu-E",
  },
  {
    title: "3Blue1Brown",
    description:
      "3Blue1Brown makes difficult problems simple with changes in perspective.",
    videoLink: "https://www.youtube-nocookie.com/embed/mH0oCDa74tE",
  },
];

export default function FreeCodeCamp() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };
  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "rgb(79 79 220)",
          color: "#fff",
          maxWidth: "100%",
        }}
        className={`${styles.shrink} ${closing ? styles.grow : ""}`}
      >
        <ProjectItem id={3} shrunk={true} onClose={handleClose} />
      </div>
      <div className={styles.contentContainer}>
        {data.map((item, index) => {
          return (
            <div key={`fcc-content-${index}`}>
              <h1>{item.heading}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
        {data2.map((item, index) => {
          return (
            <div className={styles.videoItem} key={`fcc-video-${index}`}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className={styles.videoIframeContainer}>
                <iframe
                  // width="100%"
                  // height="100%"
                  src={item.videoLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
