import Dashboard from "./dashboard/page";
export const metadata = {
  title: "BetygFi : Elevate your game",
  description: "Elevate your game",
  viewport: 'width=1400'
};

export default function Home() {
  return (
    <>
      <main style={{ marginBottom: "42px" }}>
        <Dashboard />
      </main>
    </>
  );
}
