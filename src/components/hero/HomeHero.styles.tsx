import Image from "next/image";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Screen } from "../../styles";
import { HeroStyles } from "./Hero.styles";


export const HomeHero = styled.section`
   ${HeroStyles}
    &::before{
      ${tw`w-full h-[100vh] content absolute top-0 left-0 opacity-50`}
      background: purple;
      z-index: 2;
      animation: 10s background-neon ease-in-out infinite;
    }

    @keyframes background-neon{
      0%{
        ${tw`opacity-50`}
      }

      50%{
        ${tw`opacity-20`}
      }

      100%{
        ${tw`opacity-50`}
      }
    }

    & *:not(img,span){
      z-index: 3;
    }

    & .home__hero {

      &-content {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      &-title {
        line-height: 0.9;
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        text-shadow: 2px 2px 8px purple;
      }

      &-text {
        font-size: clamp(1rem, 2vw, 1.25rem);
        text-shadow: 2px 2px 8px red;
        word-wrap: break-word;
      }

      &-brands {
        ${tw`w-1/2 flex justify-center items-center absolute bottom-0 left-0 h-24 px-4`}
        justify-content: space-around;

        & * {
          font-size: 3.5rem;
          filter: drop-shadow(2px 2px 20px fuchsia);

          @media (max-width: ${Screen.LARGE}){
            font-size: 3rem;
          }

          @media (max-width: ${Screen.MOBILE}){
            font-size: 2.5rem;
          }
        }

        @media (max-width: ${Screen.LAPTOP}){
          ${tw`w-full`}
        }

        @media (max-width: ${Screen.TABLET}){
            width: 100%;
        }
      }
    }
`;

export const HomeImage = styled(Image)`
    ${tw`w-full h-[100vh]`}
`;