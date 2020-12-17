import React, { useState } from "react";
import Image from "next/image";
import styles from "./jellyfin.module.css";
import ProjectItem from "../../components/ProjectItem";

const data = [
  "Jellyfin Web",
  "I originally started working on Jellyfin Web, a front end project built entirly on plain HTML and JavaScript. During that time, I implemented several new features, help morernize the codebase from CommonJS modules to ES6 modules. This allows the project to be split up into smaller bundles, improving loading times in browsers.",
  "Dark outside? I implemented a dark mode for the web client, allowing users to easily toggle between dark, and light mode to make it easier on the eyes.",
  "Jellyfin Vue",
  "To progress, and improve the Jellyfin project further, the contributers and I took the decision to start from fresh with a framework (VueJS). This led to the creation of Jellyfin Vue. A project designed to be faster, more efficient, friendlier to first time contributers, and more accessible. ",
  "Material Design Frameworks",
  "In Jellyfin Vue, Vuetify (a material design framework) was used. Frameworks, such as this one, allow for easy and quick initial development with the infinite ability to customize after the initial design has been produced.",
  "Virtual Scrollers... Visualizing hundreds, or even thousands of elements can be slow. Therefore, by manipulating the DOM, and only showing the elements that are on the screen at any one time, performance can be dramatically improved. Since users may have hundreds of items in a library, this was essential to implement for a blazing fast experience. We used Vue-Virtual-Scroller to do this.",
  "UX... With the framework, pre-provided by Vuetify, we can make awesome change and UI designs easily. It also provides components such as dialog components which reduce the number of component to maintain and make it easy to view documentation",
];

export default function KoralFuse() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };
  return (
    <div>
      <div
        style={{
          width: "100vw",
          maxWidth: "100%",
          color: "#fff",
          background: "linear-gradient(-45deg, #109bd9, #9f5fc3) #fff",
        }}
        className={`${styles.shrink} ${closing ? styles.grow : ""}`}
      >
        <ProjectItem id={1} shrunk={true} onClose={handleClose} />
      </div>
      <div className={styles.contentContainer}>
        <h1>{data[0]}</h1>
        <p>{data[1]}</p>
        <p>{data[2]}</p>
        <h2>{data[3]}</h2>
        <p>{data[4]}</p>
        {/* <Image src="" /> */}
        <h2>{data[5]}</h2>
        <p>{data[6]}</p>
        <div className={styles.imageContainer}>
          <Image
            src="/virtual-scrolling-explanation.png"
            width={267}
            height={403}
            layout="responsive"
          />
        </div>
        <p>{data[7]}</p>
        <p>{data[8]}</p>
      </div>
    </div>
  );
}
