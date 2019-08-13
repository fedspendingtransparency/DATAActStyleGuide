import React, { Component } from 'react';

import CodeSnippet, { buildPropDetails } from "../docs/CodeSnippet";
import Tooltip from "../components/Tooltip";
import Demo from "../docs/Demo";
import DocumentationWrapper from "../docs/DocumentationWrapper";

const ExampleTooltipContent = () => (
    <div className="tt__container">
        <h1>Here is an example Header for the tooltip</h1>
        <p>Here are some random words serving the purpose of illustrating how the tooltip component works</p>
        <p>Its really pretty neat and easy to use. I think youre gonna like it a ton.</p>
        <p>Youre welcome.</p>
    </div>
);

const detail = (
    <p>
        The tooltip component is a really neat component and this is the explanation of all of it.
    </p>
);

class TooltipPage extends Component {
    render() {
        const propDetails = {
            ...buildPropDetails('children', 'Node', 'This is the hover area which will activate the tooltip.'),
            ...buildPropDetails('tooltipComponent', 'Node', 'The tooltip to be shown to the user.'),
            ...buildPropDetails('left', 'Boolean', 'Justify tooltip to the left of the hover area. Default is justify to the right.'),
            ...buildPropDetails('wide', 'Boolean', 'Expand the tooltip width to account for a larger tooltip.'),
            ...buildPropDetails('controlledProps', 'Object', 'A configuration object to override local state (showTooltip) and local class methods (showTooltip & closeTooltip'),
            ...buildPropDetails('offsetAdjustments', 'Object', 'A configuration object to override top/right/left positioning.'),
            ...buildPropDetails('styles', 'Object', 'Configuration object to set inline css for the tooltip-wrapper <div> element.')
        };
        return (
            <DocumentationWrapper
                className="tooltip__page"
                header="ToolTipWrapper.jsx"
                detail={detail}>
                <Demo >
                    <Tooltip tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 30 }}>
                        <p>Hover on me for a right-justified tooltip</p>
                    </Tooltip>
                    <Tooltip wide tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 30 }}>
                        <p>Hover on me for a wide right-justified tooltip</p>
                    </Tooltip>
                    <Tooltip wide tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 30 }}>
                        <p>Hover on me for a wide right-justified tooltip</p>
                    </Tooltip>
                    <Tooltip left wide tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 15 }}>
                        <p>Hover on me for a left-justified tooltip</p>
                    </Tooltip>
                    <Tooltip left wide tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 15 }}>
                        <p>Hover on me for a wide left-justified tooltip</p>
                    </Tooltip>
                </Demo>
                <CodeSnippet propDetailsMap={propDetails}>
{`<Tooltip left wide tooltipComponent={<ExampleTooltipContent />} offsetAdjustments={{ top: 0, right: 15 }}>
    <p>Hover on me for a wide left-justified tooltip</p>
</Tooltip>`}
                </CodeSnippet>
            </DocumentationWrapper>
        );
    }
}

export default TooltipPage;
