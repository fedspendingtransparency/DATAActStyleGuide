// Gives specs on the props, variations, etc
import React from 'react';

export const buildPropDetails = (prop, propType, desc) => {
    return {
        [`${prop} (${propType})`]: desc
    };
};

const DocumentationWrapper = ({
    children,
    className,
    header,
    detail,
    propDetailsMap
}) => {
    const propDetails = Object.keys(propDetailsMap)
        .map((prop) => (
            <li className="prop-detail">
                <span className="prop-name">{prop} </span>
                <span className="prop-description">{propDetailsMap[prop]}</span>
            </li>
        ));

    return (
        <div className={`component-page ${className}`}>
            <h2>{header}</h2>
            {detail}
            <ul className="prop-details">
                {propDetails}
            </ul>
            {children}
        </div>
    );
};

export default DocumentationWrapper;
