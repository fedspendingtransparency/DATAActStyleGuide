// wrap example code in this to make it look pretty
// Gives specs on the props, variations, etc
import React from 'react';
import CodeBlock from '@tenon-io/tenon-codeblock';

const CodeSnippet = ({
    propMap,
    children
}) => {
    const x = '';
    return (
        <div className="code-snippet">
            <CodeBlock codeString={children} />
        </div>
    );
};

export default CodeSnippet;
