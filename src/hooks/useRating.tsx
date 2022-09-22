import React from "react";
import { IconType } from "react-icons";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { Game } from "types/games/Game";

interface UseRatingResult {
    Stars: IconType[];
    transformStars: () => JSX.Element[];
    LastStar: IconType | null;
}

const useRating = (rating: Game["rating"]) : UseRatingResult => {
  const [number, decimal] = rating.toFixed(1).split(".");

  const transformStars = () => stars.map((Star: IconType, index) => <Star key={index} />)

  const stars = Array(Number(number))
    .fill(0)
    .map(() => FaStar);
  let LastStar: IconType | null = Number(decimal) > 5 ? FaStarHalf : FaRegStar;
  LastStar = stars.length >= 5 ? null : LastStar;
  return {
    Stars: stars,
    transformStars,
    LastStar,
  };
};

export default useRating;
