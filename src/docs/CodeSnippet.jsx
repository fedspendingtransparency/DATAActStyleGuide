// wrap example code in this to make it look pretty
// Gives specs on the props, variations, etc
import React from 'react';
import CodeBlock from '@tenon-io/tenon-codeblock';

export const buildPropDetails = (prop, propType, desc) => {
    return {
        [`${prop} (${propType})`]: desc
    };
};

const CodeSnippet = ({
    propMap,
    children,
    propDetailsMap = { 'test (string)': "This is a definition of the prop" }
}) => {
    const propDetails = Object.keys(propDetailsMap)
        .map((prop) => (
            <li className="prop-detail">
                <span className="prop-name">{prop} </span>
                <span className="prop-description">{propDetailsMap[prop]}</span>
            </li>
        ));

    return (
        <div className="code-snippet">
            <ul className="prop-details">
                {propDetails}
            </ul>
            <CodeBlock codeString={children} />
        </div>
    );
};

export default CodeSnippet;
