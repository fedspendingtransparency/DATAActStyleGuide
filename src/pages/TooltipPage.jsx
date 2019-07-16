import React, { Component } from 'react';

import Tooltip from "../components/Tooltip";

const ExampleTooltipContent = () => (
    <div className="tt__container">
        <h1>Here is an example Header for the tooltip</h1>
        <p>Here are some random words serving the purpose of illustrating how the tooltip component works</p>
        <p>Its really pretty neat and easy to use. I think youre gonna like it a ton.</p>
        <p>Youre welcome.</p>
    </div>
)

class TooltipPage extends Component {
    render() {
        return (
            <div className="component-page tooltip__page">
                <div className="demo">
                    <Tooltip tooltipComponent={<ExampleTooltipContent />}>
                        <p>Hover on me kook</p>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default TooltipPage;
