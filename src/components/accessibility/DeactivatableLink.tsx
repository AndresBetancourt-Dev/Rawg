import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

interface DeactivatableLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
    enabled: boolean;
}

class DeactivatableLink extends React.Component<DeactivatableLinkProps> {

    constructor(props: DeactivatableLinkProps){
        super(props);
    }

    render(): React.ReactNode {
        const {children, enabled, href, ...props} = this.props;
        return (
            <a {...(enabled ? ({href}) : {})} {...props}>{children}</a>
        );
    }
}

export default DeactivatableLink;