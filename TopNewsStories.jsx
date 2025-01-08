import React from 'react';

const NewsItem = ({ title, coverage, sources }) => (
  <div className="border-b pb-4 mb-4 last:border-b-0 w-full">
    <h2 className="text-black text-lg font-semibold mb-2 leading-tight">
      {title}
    </h2>
    <div className="space-y-1 w-full">
      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden flex w-full">
        <div className="bg-red-600" style={{ width: `${coverage / 3}%` }} />
        <div className="bg-gray-400" style={{ width: `${coverage / 3}%` }} />
        <div className="bg-blue-600" style={{ width: `${100 - (2 * coverage) / 3}%` }} />
      </div>
      <div className="text-gray-600 text-xs">
        {coverage}% Center coverage: {sources} sources
      </div>
    </div>
  </div>
);

const TopNewsStories = () => {
  const stories = [
    {
      title: "Justin Trudeau says he'll resign as prime minister of Canada",
      coverage: 35,
      sources: 353
    },
    {
      title: "Biden bans new offshore drilling along most of the U.S. coastline",
      coverage: 46,
      sources: 219
    },
    {
      title: "FBI says New Orleans attacker visited city twice in recent months, wore Meta...",
      coverage: 48,
      sources: 170
    },
    {
      title: "Judge sets Trump's sentencing in hush money case for Jan. 10, but signals...",
      coverage: 43,
      sources: 347
    },
    {
      title: "US Surgeon General Calls for Cancer Warnings on Alcohol Labels",
      coverage: 54,
      sources: 281
    }
  ];

  return (
    <div className="relative flex flex-col my-0 bg-white border border-slate-200 w-96  ml-10 ">
      <h1 className="text-black text-2xl font-bold mb-6">Top News Stories</h1>
      <div className="space-y-4">
        {stories.map((story, index) => (
          <NewsItem
            key={index}
            title={story.title}
            coverage={story.coverage}
            sources={story.sources}
          />
        ))}
      </div>
    </div>
  );
};

export default TopNewsStories;
