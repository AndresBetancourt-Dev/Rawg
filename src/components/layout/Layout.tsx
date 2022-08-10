import React, { Fragment } from "react";
import Navigation from "../navigation/Navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className="main">
            <Navigation />
            <Fragment>{children}</Fragment>
        </main>
    );
};

export default Layout;