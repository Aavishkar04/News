import React from 'react';
import logo from './logo.svg';
import Mcard from './Mcard';
import './App.css';
import Lcard from './Lcard';
import Rcard from './Rcard';
import CoverageIndicator from './CoverageIndicator';
import Navbar from './Navbar';
import Subav from './Subav';
import TopNewsStories from './TopNewsStories';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './components/ui/hover-card'

function App() {
  // Create arrays to manage multiple cards
  const lcardCount = 2;
  const mcardCount = 5;
  const rcardCount = 6;

  return (
    <>
      <div className="App">
        <Navbar />
        <Subav />
        <div className="flex justify-center p-8 bg-gray-100">
          <div className="flex flex-col space-x-0 space-y-0">
            {/* Scrollable Lcard */}
            <div className="flex flex-col space-x-0 space-y-0 h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[...Array(lcardCount)].map((_, index) => (
                <HoverCard key={`lcard-${index}`}>
                  <HoverCardTrigger asChild>
                    <div>
                      <Lcard customClass={index === 0 ? "mt-4" : ""} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-sm font-semibold">Article Details</h4>
                      <p className="text-sm text-muted-foreground">
                        Click to read the full article about Website Review Check.
                        Published on April 17, 2022.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            {/* TopNewsStories directly under Lcard */}
            <div className="flex justify-start flex-column mt-0 pt-0">
              <TopNewsStories />
            </div>
          </div>

          {/* Mcards section */}
          <div className="flex flex-col space-y-0 ml-0 mr-0">
            {[...Array(mcardCount)].map((_, index) => (
              <HoverCard key={`mcard-${index}`}>
                <HoverCardTrigger asChild>
                  <div>
                    <Mcard />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-sm font-semibold">Technology News</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest technology acquisitions and updates from 2021.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Rcards section */}
          <div className="flex flex-col space-x-0 mt-4">
            {[...Array(rcardCount)].map((_, index) => (
              <HoverCard key={`rcard-${index}`}>
                <HoverCardTrigger asChild>
                  <div>
                    <Rcard />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-sm font-semibold">Featured Story</h4>
                    <p className="text-sm text-muted-foreground">
                      Hover to preview the content of this featured article.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;