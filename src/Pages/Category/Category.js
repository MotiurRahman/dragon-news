import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummaryCard from "../Shared/NewsSummaryCard/NewSummaryCard";

const Category = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      {news.map((newsInfo) => (
        <NewSummaryCard key={newsInfo._id} newsInfo={newsInfo}></NewSummaryCard>
      ))}
    </div>
  );
};

export default Category;
