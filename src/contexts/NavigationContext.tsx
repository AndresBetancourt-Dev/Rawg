import { createContext, PropsWithChildren } from "react";
import { Page } from "../types/navigation";
import { HomeIcon, NewspaperIcon, PuzzleIcon, StarIcon } from "@heroicons/react/solid";
import { useCycle } from "framer-motion";

type Cycle = (i?: number) => void;
interface NavigationContextValues {
    pages: Page[];
    isOpen: boolean;
    toggleOpen: Cycle;
};

const NavigationContext = createContext<NavigationContextValues>({
    pages: ([] as Page[]),
    isOpen: false,
    toggleOpen: () => {},
});

export const NavigationProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [isOpen, toggleOpen] = useCycle(false, true);
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
        isOpen,
        toggleOpen
    };

    return (
    <NavigationContext.Provider value={value}>
        {children}
    </NavigationContext.Provider>)
    
}

export default NavigationContext;