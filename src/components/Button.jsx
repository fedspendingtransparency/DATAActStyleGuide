import React from 'react';

import Tooltip from "./Tooltip";

export default () => (
    <div className="button">
        <Tooltip tooltipComponent={<span>HEY NERD</span>}>
            <p>Hover on me kook</p>
        </Tooltip>
    </div>
);
