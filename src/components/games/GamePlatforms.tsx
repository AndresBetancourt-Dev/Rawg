import React, { useEffect, useState } from "react";
import { chunk } from "lodash";
import { Game } from "types/games/Game";
import { Platform } from "types/games/Platform";
import PlatformIcon from "components/platforms/icon/PlatformIcon";
import styled from "styled-components";
import tw from "twin.macro";
import { PlatformDetailed } from "types/games/PlatformDetailed";

interface GamePlatformsProps {
  platforms: Game["platforms"];
}

const Container = styled.section`
  ${tw`flex col-span-2 gap-2 items-center bg-dark p-2`}
`;

const SecondaryPlatforms = styled.span`
  ${tw`font-title bg-darkest py-1 px-2 rounded-full`}
  &::before {
    content: "+";
  }
`;

const TOO_MUCH_PLATFORMS = 5;

const GamePlatforms = ({ platforms }: GamePlatformsProps) => {
  const [mainPlatforms, setMainPlatforms] = useState<PlatformDetailed[]>([]);
  const [secondaryPlatforms, setSecondaryPlatforms] = useState<
    PlatformDetailed[]
  >([]);

  useEffect(() => {
    const [main, ...others] = chunk(platforms, TOO_MUCH_PLATFORMS);
    setMainPlatforms(main);
    setSecondaryPlatforms(others.flat());
  }, [platforms]);

  return (
    <Container className="game__platforms">
      {mainPlatforms.map(({ platform }: { platform: Platform }) => (
        <PlatformIcon
          key={platform.slug}
          name={platform.name}
          slug={platform.slug}
        />
      ))}
      {secondaryPlatforms.length > 0 && (
        <SecondaryPlatforms>{secondaryPlatforms.length}</SecondaryPlatforms>
      )}
    </Container>
  );
};

export default GamePlatforms;
