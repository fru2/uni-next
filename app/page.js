'use client'
import Image from "next/image";
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import { LineChartComp, BarChartComp } from './components/Charts';
import iconStats from '@/app/icons/equalizer.svg';
import StatsCard from "./components/StatsCard";
import ArticlesList from "./components/ArticlesList";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-4 sm:px-6 lg:px-8 bg-gray-50 mt-[4.5rem] flex w-full gap-8">

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl pt-6 mb-4">Overview</h3>
          <StatsCard icon={iconStats} heading='Total publications' subhead='Articles published by PES' route='paperCount' />
          <StatsCard icon={iconStats} heading='Author count' subhead='Number of distinct authors' route='totalAuthors' />
          <div className="col-span-2 row-span-2">
            <BarChartComp title='Publications per year' route='yearCount' />
          </div>
        </div>


        <div className="flex-1">
          <h3 className="text-2xl mt-6 mb-4">Articles</h3>
          <ArticlesList route='researchpaper'></ArticlesList>
          <div className="h-6"></div>
        </div>
      </main>
    </>
  );
}
