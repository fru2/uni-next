import Image from "next/image";
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import { LineChartComp } from './components/Charts';

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <main className="px-4 sm:px-6 lg:px-8 py-2">

        <LineChartComp></LineChartComp>
        <br />
        <LineChartComp></LineChartComp>

      </main>
    </>
  );
}