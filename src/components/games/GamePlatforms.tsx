import React from "react"
import { Game } from "types/games/Game"
import { Platform } from "types/games/Platform";
import PlatformIcon from "components/platforms/icon/PlatformIcon";

interface GamePlatformsProps {
    game: Game;
}

const GamePlatforms = ({game}: GamePlatformsProps) => {
  return (
    <section className="game__platforms">
        {game.platforms.map(({platform}: {platform: Platform}) => (
            <PlatformIcon key={platform.slug} name={platform.name} image_background={platform.slug} />
        ))}
    </section>
  );
};

export default GamePlatforms