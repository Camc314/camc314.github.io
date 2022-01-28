import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ContainerWithFooterNav from "../../components/ContainerWithFooterNav";
import { IoIosClose } from "react-icons/io";

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
    extraText: [
      `I started by studying FreeCodeCamps Responsive Web Design Certification. This course gives students an understanding of HTML, HTML5, CSS, Visual Design and accessibility. Following the lessons, I built 5 projects to complete the certification.`,
      `Next I studies the JavaScript Algorithms and Data Structures Certification, this introduce JavaScript, and expands into ES6 and regular expressions. It also covers data structures, functional and Object Oriented Programming and concludes with 5 projects.`,
      `As well as the two prior certifications. I have also completed the Front End Libraries Certification, Data Visualization Certification and Back end Development and APIs Certification.`,
      `Each certification at FreeCodeCamp is equivalent to around 300 hours work.`,
    ],
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
    extraText?: string[];
  };
  i: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <li className={`ml-4 ${i != TimeLineData.length - 1 ? "mb-6" : ""}`}>
        <button
          onClick={openModal}
          className="text-left"
          disabled={!data.extraText}
        >
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
        </button>
      </li>
      {data.extraText && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            onClose={closeModal}
            open={isOpen}
            className="fixed inset-0 z-10 overflow-y-auto"
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-35" />
              </Transition.Child>
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform dark:bg-zinc-800 bg-gray-200 shadow-xl rounded-xl">
                  <div className="flex flex-row justify-between items-start">
                    <Dialog.Title
                      as="h2"
                      className="text-2xl font-semibold pr-2"
                    >
                      {data.title}
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center opacity-75 hover:opacity-100 transition-all"
                      onClick={closeModal}
                    >
                      <IoIosClose size={32} />
                    </button>
                  </div>
                  <div className="mt-2">
                    {data.extraText.map((text, i2) => (
                      <p
                        className={`${
                          i != data.extraText.length - 1 && "mb-4"
                        } text-gray-700 dark:text-gray-300`}
                        key={`tl-modal-li-${i}-${i2}`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};
