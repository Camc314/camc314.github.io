import React from "react";
import ContainerWithFooterNav from "../../components/ContainerWithFooterNav";

const blogPosts = [];

export default function Blog() {
  return (
    <ContainerWithFooterNav pageTitle="Home - Cameron Clark">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Blog</h1>
        {blogPosts.length == 0 && (
          <h2 className="text-2xl my-4">
            There's nothing here, check back later!
          </h2>
        )}
        {[1, 2, 3, 4].map((i) => (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 w-full">
            <h1 className="text-xl font-semibold">Blog Post title</h1>
            <p>Blog Post short description</p>
          </div>
        ))}
      </div>
    </ContainerWithFooterNav>
  );
}
