import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./koralfuse.module.css";
import ProjectItem from "../../components/ProjectItem";

const data = [
  {
    heading: "Background",
    description: [
      "After identifying that there was no native iOS client for Jellyfin, I decicided to write my own. This lead to the creation of KoralFuse.",
    ],
  },
  {
    heading: "Scope",
    description: [
      "I already had some experiecne with React, so I decided to use React native. This was also convenient since I did not own a Mac, and could use Expo to test and improve it on my iPhone.",
    ],
  },
  {
    heading: "Process",
    description: [
      "Beginning with the API. Although there was a previously generated API client for Jellyfin written in JavaScript, it was somewhat incomplete. Therefore, I decided to use a generated API Client from an OpenAPI Generator.",
      "This generated client meant that all the correct properties, endpoint and parameters were there already, allowing me to start coding and not worry about writing an API interface from scratch.",
      "Next I had to consider navigation, aas with most apps, you need a method of navigation from one page to another. Therefore, I used React-navigation/native, a popular library with ~300,000 weekly downloads. However I am now considering using react-native-navigation by Wix, as it allows intergration with specific layouts such as UISplitViewController, which, on devices like tablets would allow me to make better use of the screen space.",
      "Blurhash... Give users' the loading experience they want. Instead of waiting for images to load, and looking at grey squares, blurhash shows a blurred image while the full resolution image is loading. Looking to the future, I want to implement Blurhash on all images within the app. This will require some native intergration to maintain high performance",
      "This project is currently deployed to the App Store and is in a TestFlight beta. The beta group will test the product for the next few months until it is ready for release.",
    ],
  },
];

export default function KoralFuse() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  useEffect(() => {
    document.title = "KoralFuse - Cameron";
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          maxWidth: "100%",
          background:
            "linear-gradient(180deg, rgba(170, 92, 195, 0.61) 0%, rgba(0, 164, 220, 0.61) 100%) #fff",
        }}
        className={`${styles.shrink} ${closing ? styles.grow : ""}`}
      >
        <ProjectItem id={2} shrunk={true} onClose={handleClose} />
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
