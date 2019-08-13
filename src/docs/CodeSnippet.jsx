// wrap example code in this to make it look pretty
// Gives specs on the props, variations, etc
import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from '@tenon-io/tenon-codeblock';

const CodeSnippet = ({
    children
}) => <div className="code-snippet" ><CodeBlock language="jsx" codeString={children} /></div>;

CodeSnippet.propTypes = {
    children: PropTypes.node
};

export default CodeSnippet;
