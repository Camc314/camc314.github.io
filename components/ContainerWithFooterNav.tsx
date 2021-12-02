import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import { NavBar } from "./NavBar";

export default function ContainerWithFooterNav({
  pageTitle,
  children,
}: {
  pageTitle?: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <Container pageTitle={pageTitle}>
      <>
        <NavBar />
        <main className="flex flex-col justify-center px-8">
          <div
            className={
              "flex flex-col justify-center items-start max-w-2xl mx-auto pb-4 w-full"
            }
          >
            {children}
          </div>
        </main>
        <Footer />
      </>
    </Container>
  );
}
