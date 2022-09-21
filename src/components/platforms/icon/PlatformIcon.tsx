import React, { Fragment } from "react";
import { IconType } from "react-icons";
import { RiComputerLine, RiGamepadFill, RiGamepadLine, RiMacFill } from "react-icons/ri";
import { SiPlaystation4, SiPlaystation5, SiXbox, SiNintendoswitch, SiNintendo3Ds, SiMacos, SiPlaystation3, SiPlaystation2, SiPlaystation, SiPlaystationvita, SiWii, SiWiiu, SiNintendogamecube, SiNintendo, SiApple, SiAtari, SiSega } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { FaXbox, FaApple, FaPlaystation, FaGamepad } from "react-icons/fa";
import { IoLogoGameControllerA, IoLogoXbox } from "react-icons/io";
import { RiXboxLine } from "react-icons/ri";
import { GiGameConsole } from "react-icons/gi";
import { Platform } from "../../../types/games/Platform";

const platforms: Map<string, IconType> = new Map([
  ["pc", RiComputerLine],
  ["playstation5", SiPlaystation5],
  ["playstation4", SiPlaystation4],
  ["xbox-one", SiXbox],
  ["xbox-series-x", FaXbox],
  ["nintendo-switch", SiNintendoswitch],
  ["ios", FaApple],
  ["android", AiFillAndroid],
  ["nintendo-3ds", SiNintendo3Ds],
  ["nintendo-ds", SiNintendo3Ds],
  ["nintendo-dsi", SiNintendo3Ds],
  ["macos", SiMacos],
  ["linux", RiComputerLine],
  ["xbox360", IoLogoXbox],
  ["xbox-old", RiXboxLine],
  ["playstation3", SiPlaystation3],
  ["playstation2", SiPlaystation2],
  ["playstation1", SiPlaystation],
  ["ps-vita", SiPlaystationvita],
  ["psp", FaPlaystation],
  ["wii-u", SiWiiu],
  ["wii", SiWii],
  ["gamecube", SiNintendogamecube],
  ["nintendo-64", SiNintendo],
  ["game-boy-advance", RiGamepadFill],
  ["game-boy-color", RiGamepadFill],
  ["game-boy", RiGamepadLine],
  ["snes", IoLogoGameControllerA],
  ["nes", FaGamepad],
  ["macintosh", RiMacFill],
  ["apple-ii", SiApple],
  ["commodore-amiga", GiGameConsole],
  ["atari-7800", SiAtari],
  ["atari-5200", SiAtari],
  ["atari-2600", SiAtari],
  ["atari-flashback", SiAtari],
  ["atari-8-bit", SiAtari],
  ["atari-st", SiAtari],
  ["atari-lynx", SiAtari],
  ["atari-xegs", SiAtari],
  ["genesis", SiSega],
  ["sega-saturn", SiSega],
  ["sega-cd", SiSega],
  ["sega-32x", SiSega],
  ["sega-master-system", SiSega],
  ["dreamcast", SiSega],
  ["3do", GiGameConsole],
  ["jaguar", GiGameConsole],
  ["game-gear", GiGameConsole],
  ["neogeo", GiGameConsole],
]);

interface PlatformIconProps {
    name: Platform["name"];
    image_background: Platform["image_background"];
}

const PlatformIcon = ({ name, image_background }: PlatformIconProps) => {
  const Icon: IconType | undefined = platforms.get(image_background);

  console.log(Icon);

  return <Fragment>{Icon && <Icon className={image_background} title={name} aria-label={name} />}</Fragment>;
};

export default PlatformIcon;
