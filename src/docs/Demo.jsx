import React from 'react';

const Demo = ({
    children,
    className = ""
}) => {
    return (
        <div className={`demo ${className}`}>
            {children}
        </div>
    );
};

export default Demo;
