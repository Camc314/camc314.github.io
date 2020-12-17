import React, { useEffect, useState } from "react";
import BigCodeBlock from "./BigCodeBlock";
import CodeBlock from "./CodeBlock";
import styles from "./ProjectItem.module.css";
import { useRouter } from "next/router";
import { animateScroll } from "react-scroll";
import CommandLine from "./CommandLine";
import { IoIosClose } from "react-icons/io";
import ImageContainer from "./ImageContainer";

const projectData = [
  {
    name: "About Me",
    description: "I'm a 20 year-old, developer that loves to add value. ",
    buttonName: "Learn More",
    link: "/projects/about",
  },
  {
    name: "Jellyfin Project",
    description:
      "Host your media on your terms. Store your photos and videos and have access anywhere in the world!",
    link: "/projects/jellyfin",
  },
  {
    name: "KoralFuse",
    description:
      "A purpose built IOS client for the Jellyfin project built with React Native.",
    link: "/projects/koralfuse",
  },
  {
    name: "Free Code Camp",
    description:
      "I have completed over 10 qualifications to improve my professional development.",
    buttonName: "Learn More",
    link: "/projects/freecodecamp",
  },
];

export default function ProjectItem({
  id,
  shrunk,
  onClose,
}: {
  id: number;
  shrunk?: boolean;
  onClose?: Function;
}) {
  const [hideHeading, setHideHeading] = useState(true);
  const [closing, setClosing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setHideHeading(false), 750);
  }, []);

  const handleClose = () => {
    setClosing(true);
    onClose();
    setTimeout(() => {
      router
        .push("/projects")
        .then(() => window.scrollTo({ top: window.innerHeight * id }));
    }, 500);
  };

  return (
    <>
      {shrunk === true && !hideHeading ? (
        <div
          className={`${styles.smallHeadingContainer} ${
            closing ? styles.fadeOut : ""
          }`}
        >
          <div className={styles.headingSmall}>
            <h1>{projectData?.[id].name}</h1>
            <IoIosClose size={48} onClick={() => handleClose()} />
          </div>
        </div>
      ) : (
        <div />
      )}
      <div
        className={`${styles.itemContainer} ${shrunk ? styles.hideBody : ""}`}
      >
        <div className={styles.itemBody}>
          <h1 className={styles.heading}>{projectData?.[id].name}</h1>
          <p
            style={{
              width: "fit-content",
              maxWidth: "50%",
            }}
          >
            {projectData?.[id].description}
          </p>
          <div
            className={styles.viewButton}
            onClick={() => {
              animateScroll.scrollTo(window.innerHeight * id, {
                duration: Math.abs(window.innerHeight * id - window.scrollY),
              });
              setTimeout(
                () =>
                  router
                    .push(projectData?.[id].link)
                    .then(() => window.scrollTo(0, 0)),
                Math.abs(window.innerHeight * id - window.scrollY) + 50
              );
            }}
          >
            {projectData?.[id].buttonName || "View Project"}
          </div>
        </div>
        {id === 3 ? (
          <div className={styles.codeContainer}>
            <BigCodeBlock />
          </div>
        ) : (
          <div />
        )}
        {id === 0 ? <CommandLine /> : <div />}
        {id === 1 ? (
          <ImageContainer
            source="/jf-vue-item-demo.png"
            width={596}
            height={344}
          />
        ) : (
          <div />
        )}
        {id === 2 ? (
          <ImageContainer
            source="/koralfuse-iphone-ipad.svg"
            height={157.2}
            width={205.4}
          />
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
