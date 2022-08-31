import styled from "styled-components/macro";
import tw from "twin.macro";
import { Game } from "../../types/games/Game";

export const Container = styled.article<Partial<Game>>`
    min-height: 200px;
    width: 30%;
    background: #6600ff;
    border-radius: 1rem;
    background-image: url(${props => props.background_image});
    background-size: cover;
    background-position: center;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    transition: 1s ease;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        transition: 1s ease;
        background-color: #${props => props.dominant_color};
        opacity: 0.25;
    }

    &:hover{
        transform: scale(1.1,1.1);
    }

    & h1{
        margin-left: 1em;
    }

`;