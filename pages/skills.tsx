import React from "react";
import CodeBlock from "../components/CodeBlock";
import SkillsListItem from "../components/SkillsListItem";

export default function SkillsPage(): JSX.Element {
  return (
    <div>
      <SkillsListItem />
      <div>
        <div></div>
        <CodeBlock type="code" />
      </div>
    </div>
  );
}
