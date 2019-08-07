// Gives specs on the props, variations, etc
import React from 'react';

const DocumentationWrapper = ({
    children,
    className,
    header,
    detail
}) => {
    return (
        <div className={`component-page ${className}`}>
            <h2>{header}</h2>
            {detail}
            {children}
        </div>
    );
};

export default DocumentationWrapper;
