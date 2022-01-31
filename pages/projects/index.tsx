import Link from "next/link";
import Image from "next/image";
import React from "react";
import ContainerWithFooterNav from "../../components/ContainerWithFooterNav";

type project = {
  title: string;
  description?: string;
  link: string;
  projectBackground?: JSX.Element;
};

const WikitoolsProjectBackground = () => {
  return (
    <div className="relative w-full h-full">
      <Image src="/wikitools-background.png" layout="fill" />
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center font-mono">
        <h2 className="text-2xl font-semibold">wikitools</h2>
      </div>
    </div>
  );
};

const PersonalProjectBackground = () => {
  return (
    <div className="bg-blue-50 h-full flex flex-col justify-center px-4 shadow-inner text-black">
      <h3 className="font-bold text-lg">Cameron Clark</h3>
      <p className="text-sm">Self-taught developer, computer science student, and athlete.</p>
    </div>
  );
};

const projects: project[] = [
  {
    title: "Wikitools",
    description: "Tools for Processing Data from Wikipedia",
    link: "/projects/wikitools",
    projectBackground: <WikitoolsProjectBackground />,
  },
  {
    title: "Personal Website",
    link: "",
    projectBackground: <PersonalProjectBackground />,
  },
];

export default function ProjectsPage() {
  return (
    <ContainerWithFooterNav pageTitle="Projects - Cameron">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Projects</h1>
        <h2 className="text-2xl my-4">
          A collection of things I've worked on.
        </h2>
        <div className="grid md:grid-cols-2 w-full md:gap-4 gap-y-2">
          {projects.map((project, i) => (
            <ProjectItem project={project} key={`${i}-${project.title}`} />
          ))}
        </div>
      </div>
    </ContainerWithFooterNav>
  );
}

function ProjectItem({ project }: { project: project }): JSX.Element {
  return (
    <Link href={project.link}>
      <a className="rounded-md bg-gray-400 dark:bg-gray-600 h-48 relative overflow-hidden">
        <span>{project.projectBackground || project.title}</span>
        <div className="rounded-md bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition-all absolute w-full h-full top-0 left-0 flex flex-col justify-end p-4">
          <h3 className="text-3xl text-white font-semibold">{project.title}</h3>
          {project.description && (
            <p className="text-base text-white font-light">
              {project.description}
            </p>
          )}
        </div>
      </a>
    </Link>
  );
}
