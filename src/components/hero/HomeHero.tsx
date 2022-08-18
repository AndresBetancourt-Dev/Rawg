import React from "react";
import { HomeHero as Hero, HomeImage } from "./HomeHero.styles";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames, SiEa, SiRiotgames, SiActivision, SiCdprojekt, SiUbisoft } from "react-icons/si";

const HomeHero = () => {
  return (
    <Hero className="home__hero">
      <div className="home__hero-content">
        <h1 className="home__hero-title">Next Generation of
          <br />Video Games!
        </h1>
        <p className="home__hero-text">The largest video game database and game discovery service.</p>
      </div>
      <HomeImage src={"/images/neon-background.png"} width={1280} height={540} layout="fill" objectFit="cover" alt="Neon Background" aria-label="Neon Background" />
      <div className="home__hero-brands">
        <FaSteam />
        <SiEpicgames />
        <SiEa />
        <SiRiotgames />
        <SiActivision />
        <SiUbisoft />
        <SiCdprojekt />
      </div>
    </Hero>
  );
};

export default HomeHero;