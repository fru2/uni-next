'use client'
import Image from "next/image";
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import { LineChartComp, BarChartComp } from './components/Charts';
import iconStats from '@/app/icons/equalizer.svg';
import StatsCard from "./components/StatsCard";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-4 sm:px-6 lg:px-8 bg-gray-50 mt-[4.5rem]">

        <h3 className="text-2xl pt-6 mb-4">Overview</h3>

        <div className="grid grid-cols-4 grid-rows-2 gap-2">
          <StatsCard icon={iconStats} heading='Total publications' subhead='Articles published by PES' route='paperCount'/>
          <StatsCard icon={iconStats} heading='Card context goes here' subhead='Short desc' />
          <div className="col-span-2 row-span-2">
            <BarChartComp title='Publications per year'/>
          </div>
          <StatsCard icon={iconStats} heading='Card context goes here' subhead='Short desc' />
          <StatsCard icon={iconStats} heading='Card context goes here' subhead='Short desc' />
        </div>

        <h3 className="text-2xl mt-6 mb-4">Contributors</h3>
      </main>
    </>
  );
}
