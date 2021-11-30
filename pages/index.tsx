import ContainerWithFooterNav from "../components/ContainerWithFooterNav";

export default function Home() {
  return (
    <ContainerWithFooterNav pageTitle="Home - Cameron Clark">
        <div className="w-full">
          <h1 className="text-5xl font-bold">Cameron Clark</h1>
          <h2 className="text-2xl my-4">
            Self-taught developer, computer science student, and athlete.
          </h2>
        </div>
    </ContainerWithFooterNav>
  );
}
