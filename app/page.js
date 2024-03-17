import Image from "next/image";
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import { LineChartComp } from './components/Charts';
import iconStats from '@/app/icons/equalizer.svg';
import StatsCard from "./components/StatsCard";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <main className="px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-svh">

        <h3 className="text-2xl pt-6 mb-4">Overview</h3>

        <div className="grid grid-cols-4 grid-rows-2 gap-2">

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <div className="col-span-2 row-span-2">
            <LineChartComp></LineChartComp>
          </div>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

        </div>

        <h3 className="text-2xl mt-6 mb-4">Contributors</h3>

      </main>
    </>
  );
}