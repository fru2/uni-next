import Image from "next/image";
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import { LineChartComp } from './components/Charts';
import iconStats from '@/app/icons/equalizer.svg';
import StatsCard from "./components/StatsCard";



export default function Home({paperCount}) {
  return (
    <>
      <Nav></Nav>
      <main className="px-4 sm:px-6 lg:px-8 py-2">

        <div className="grid grid-cols-4 grid-rows-2 gap-2">

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <div className="col-span-2 row-span-2">
            <LineChartComp></LineChartComp>
          </div>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

          <StatsCard icon={iconStats} count={1234} heading='Card context goes here' subhead='Short desc'></StatsCard>

        </div>

      </main>
    </>
  );
}