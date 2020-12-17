import React, { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsPage(): JSX.Element {
  const [a, setA] = useState(100);
  const [curWinScroll, setCurWinScroll] = useState(0);
  const [b, setB] = useState(`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`);
  const [c, setC] = useState(`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`);
  const [d, setD] = useState(`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`);

  useEffect(() => {
    document.title = "Projects - Cameron";
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
      setB(
        `polygon(0% 0%, ${
          ((window.innerHeight - window.scrollY) / window.innerHeight) * 100
        }% 0%, ${
          ((window.innerHeight - window.scrollY) / window.innerHeight) * 100
        }% 100%, 0% 100%)`
      );
    } else if (window.scrollY < window.innerHeight * 2) {
      setB(`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`);
      setC(
        `polygon(0% 0%, ${
          ((window.innerHeight - (window.scrollY - window.innerHeight)) /
            window.innerHeight) *
          100
        }% 0%, ${
          ((window.innerHeight - (window.scrollY - window.innerHeight)) /
            window.innerHeight) *
          100
        }% 100%, 0% 100%)`
      );
    } else if (window.scrollY <= window.innerHeight * 3) {
      setB(`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`);
      setC(`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`);
      setD(
        `polygon(0% 0%, ${
          ((window.innerHeight - (window.scrollY - window.innerHeight * 2)) /
            window.innerHeight) *
          100
        }% 0%, ${
          ((window.innerHeight - (window.scrollY - window.innerHeight * 2)) /
            window.innerHeight) *
          100
        }% 100%, 0% 100%)`
      );
    }
    setCurWinScroll(window.scrollY);
  };

  return (
    <div style={{ height: "401vh" }}>
      <div
        style={{
          position: "fixed",
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00b7ff",
            zIndex: 4,
            clipPath: b,
          }}
          onScrollCapture={(e) => console.log(e)}
        >
          <ProjectItem id={0} />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(-45deg, #109bd9, #9f5fc3) #fff",

            zIndex: 3,
            clipPath: c,
            color: "#fff",
          }}
        >
          <ProjectItem id={1} />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            background:
              "linear-gradient(180deg, rgba(170, 92, 195, 0.61) 0%, rgba(0, 164, 220, 0.61) 100%) #fff",

            zIndex: 2,
            clipPath: d,
          }}
        >
          <ProjectItem id={2} />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgb(79 79 220)",
            color: "#fff",
            zIndex: 1,
          }}
        >
          <ProjectItem id={3} />
        </div>
      </div>
    </div>
  );
}
