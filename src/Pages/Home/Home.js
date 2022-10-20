import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummaryCard from "../Shared/NewsSummaryCard/NewSummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((newsInfo) => (
        <NewSummaryCard key={newsInfo} newsInfo={newsInfo}></NewSummaryCard>
      ))}
    </div>
  );
};

export default Home;
