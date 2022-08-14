import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";


const AllowKeyboardNavigation: React.FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>> = ({ children, ...props }) => {
    return (
        <a href="#!" onClick={e => e.preventDefault()} {...props}>{children}</a>
    );
};

export default AllowKeyboardNavigation;