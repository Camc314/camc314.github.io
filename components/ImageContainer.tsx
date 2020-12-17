import React from "react";
import Image from "next/image";
import styles from "./ImageContainer.module.css";

export default function ImageContainer({
  source,
  height,
  width,
}: {
  source: string;
  height: number;
  width: number;
}) {
  return (
    <div className={styles.imageContainer}>
      <Image src={source} width={width} height={height} layout="responsive" />
    </div>
  );
}
