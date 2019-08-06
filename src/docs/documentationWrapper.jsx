// Gives specs on the props, variations, etc
import React from 'react';

const DocumentationWrapper = ({
    children,
    className,
    header,
    detail
}) => {
    const x = '';
    return (
        <div className={`component-page ${className}`}>
            <h2>{header}</h2>
            <p>{detail}</p>
            {children}
        </div>
    );
};

export default DocumentationWrapper;
