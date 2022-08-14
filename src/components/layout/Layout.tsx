import React, { Fragment, useContext } from "react";
import LayoutContext from "../../contexts/LayoutContext";
import Navigation from "../navigation/Navigation";
import { Main } from "./Layout.styles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { background } = useContext(LayoutContext);

    return (
        <Main className="main" background={background ?? ""}>
            <Navigation />
            <Fragment>{children}</Fragment>
        </Main>
    );
};

export default Layout;