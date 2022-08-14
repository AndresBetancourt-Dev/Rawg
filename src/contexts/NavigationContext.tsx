import { createContext, PropsWithChildren } from "react";
import { Page } from "../types/navigation";
import { HomeIcon, NewspaperIcon, PuzzleIcon, StarIcon } from "@heroicons/react/solid";

interface NavigationContextValues {
    pages: Page[];
}

const NavigationContext = createContext<NavigationContextValues>({
    pages: ([] as Page[])
});

export const NavigationProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const pages = [
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
    ];

    const value = {
        pages,
    }

    return (
    <NavigationContext.Provider value={value}>
        {children}
    </NavigationContext.Provider>)
    
}

export default NavigationContext;