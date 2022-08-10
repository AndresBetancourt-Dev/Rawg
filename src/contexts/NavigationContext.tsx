import { createContext } from "react";
import { Page } from "../types/navigation";
import { HomeIcon, NewspaperIcon, PuzzleIcon, StarIcon } from "@heroicons/react/solid";

const NavigationContext = createContext<Page[]>([
    {
        url: "/",
        name: "Home",
        icon: HomeIcon
    },
    {
        url: "/latest",
        name: "Latest",
        icon: StarIcon
    },
    {
        url: "/games",
        name: "Games",
        icon: PuzzleIcon
    },
    {
        url: "/news",
        name: "News",
        icon: NewspaperIcon
    },
]);

export default NavigationContext;