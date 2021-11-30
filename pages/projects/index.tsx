import Link from "next/link";
import React from "react";
import Container from "../../components/Container";
import ContainerWithFooterNav from "../../components/ContainerWithFooterNav";

type project = {
  title: string;
  description: string;
  link: string;
};

const projects: project[] = [
  { title: "Project 1", description: "Project Description", link: "" },
  { title: "Project 2", description: "Project Description", link: "" },
  { title: "Project 3", description: "Project Description", link: "" },
  { title: "Project 4", description: "Project Description", link: "" },
];

export default function Blog() {
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

function ProjectItem({ project }: { project: project }) {
  return (
    <Link href={project.link}>
      <div className="rounded-md bg-gray-400 dark:bg-gray-600 h-48 relative">
        <span>{project.title}</span>
        <div className="rounded-md bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition-all absolute w-full h-full top-0 left-0 flex flex-col justify-end p-4">
          <h3 className="text-3xl text-white font-semibold">{project.title}</h3>
          <p className="text-base text-white font-light">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
