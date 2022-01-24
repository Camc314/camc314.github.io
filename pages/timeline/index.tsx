import React from "react";
import ContainerWithFooterNav from "../../components/ContainerWithFooterNav";

const TimeLineData = [
  {
    date: "Febuary 2022",
    title: "Second Year Computer Science - Semester B",
    snippet: `Began second semester studying AI, The C Family, and operating systems and networks.`,
  },
  {
    date: "September 2021",
    title: "Second Year Computer Science - Semester A",
    snippet: `Began second year studying Computer Science. Studying database concepts, algorithms and data structures`,
  },
  {
    date: "September 2020",
    title: "Studying Computer Science at University",
    snippet: `Began studying Computer Science at University. First year modules included Human Dimensions, Programming, Models and Methods and Platforms.`,
  },
  {
    date: "August 2020",
    title: "Open Source Project Maintainer",
    snippet: "Joined a team of around 30 based globally.",
  },
  {
    date: "August 2020",
    title: "Experiments with React Native",
    snippet: `Designed, Built and tested an app using React Native and Redux as a native alternative.`,
  },
  {
    date: "May 2020",
    title: "First Open Source Contribution",
    snippet: `Made first Open Source contribution to a popular project, fixing a CSS styling bug.`,
  },
  {
    date: "March 2020",
    title: "The Beginning",
    snippet: `Began learning through FreeCodeCamp alongside YouTube. Starting with basic HTML, CSS and JavaScript. Progressed onto React.`,
  },
];

export default function TimeLine() {
  return (
    <ContainerWithFooterNav pageTitle="Cameron Clark - Timeline">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Timeline</h1>
        <h2 className="text-2xl my-4">
          A story from{" "}
          <span className="font-mono bg-slate-200 dark:bg-slate-500 rounded-md p-1 text-xl">
            Hello World
          </span>{" "}
          to here.
        </h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {TimeLineData.map((timeLineInstance, i) => (
            <TimelineItem data={timeLineInstance} key={i} i={i} />
          ))}
        </ol>
      </div>
    </ContainerWithFooterNav>
  );
}

const TimelineItem = ({
  data,
  i,
}: {
  data: {
    date: string;
    title: string;
    snippet: string;
  };
  i: number;
}) => {
  return (
    <li className={`ml-4 ${i != TimeLineData.length - 1 ? "mb-10" : ""}`}>
      <span className="absolute flex items-center justify-center w-3 h-6 -left-1.5 ">
        <div className="xabsolute w-3 h-3 bg-gray-200 rounded-full -xleft-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      </span>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {data.date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {data.title}
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {data.snippet}
      </p>
    </li>
  );
};
