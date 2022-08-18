import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

interface LayoutContextValues {
    background?: string;
    setBackground?: Dispatch<SetStateAction<string>>;
};

export const LayoutContext = createContext<LayoutContextValues>({});

const DUMMY_URL = "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg";

export const LayoutProvider : React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [background, setBackground] = useState<string>(DUMMY_URL);

    const value = {
        background, 
        setBackground
    };

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutContext;