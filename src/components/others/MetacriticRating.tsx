import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Game } from "types/games/Game";

interface MetacriticRatingProps {
  metacritic: Game["metacritic"];
}

enum MetacriticColors {
  Positive = "#6c3",
  Mixed = "#fc3",
  Negative = "#f00",
}

const MetacriticContainer = styled.div<{ score: MetacriticColors }>`
  ${tw`px-1 text-lg font-bold font-sans w-min`}
  background-color: ${({ score }) => score};
`;

const MetacriticRating: React.FC<MetacriticRatingProps> = ({ metacritic }) => {
  let score: MetacriticColors;

  if (metacritic >= 75) {
    score = MetacriticColors.Positive;
  } else if (metacritic >= 50) {
    score = MetacriticColors.Mixed;
  } else {
    score = MetacriticColors.Negative;
  }

  return <MetacriticContainer score={score}>{metacritic}</MetacriticContainer>;
};

export default MetacriticRating;
