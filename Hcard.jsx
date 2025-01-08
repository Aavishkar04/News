import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';

function CardWithHover({ CardComponent, hoverTitle, hoverDescription }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <CardComponent />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col space-y-2">
          <h4 className="text-sm font-semibold">{hoverTitle}</h4>
          <p className="text-sm text-muted-foreground">{hoverDescription}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default CardWithHover;
