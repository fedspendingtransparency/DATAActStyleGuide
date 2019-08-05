/**
 * Tooltip.jsx
 * Created by Lizzie Salita 3/8/19
 */

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {
    children: PropTypes.node,
    tooltipComponent: PropTypes.node,
    left: PropTypes.bool,
    wide: PropTypes.bool,
    icon: PropTypes.string,
    controlledProps: PropTypes.shape({
        isControlled: PropTypes.bool,
        showTooltip: PropTypes.func,
        closeTooltip: PropTypes.func,
        isVisible: PropTypes.bool
    }),
    offsetAdjustments: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        left: PropTypes.number
    }),
    styles: PropTypes.shape({}) // currently only using width
};

const defaultOffsetAdjustments = {
    top: -15, // InfoToolTip offset
    right: 30, // InfoToolTip offset
    left: 0
};

const horizontalPadding = 20;

const tooltipIcons = {
    info: <FontAwesomeIcon className="tooltip__icon" icon="info-circle" />
};

const TooltipWrapper = ({
    wide = false,
    offsetAdjustments = defaultOffsetAdjustments,
    controlledProps = { isControlled: false },
    tooltipComponent,
    left,
    styles = {},
    children = null,
    icon = ''
}) => {
    const [dimensions, setDimensions] = useState({ offsetTop: 0, offsetLeft: 0, width: 0 });
    const [showTooltip, setTooltip] = useState(false);
    const ref = useRef({ offsetLeft: 0, offsetTop: 0, width: 0 });

    useEffect(() => {
        const measureOffset = throttle(() => {
            let tooltipWidth = 375;
            const tooltipContainer = ref.current;
            const ttContainerWidth = tooltipContainer.clientWidth;

            const offsetTop = tooltipContainer.offsetTop + offsetAdjustments.top;
            const totalSpace = window.innerWidth;
            const spaceToLeft = tooltipContainer.offsetLeft;
            const spaceToRight = (totalSpace - spaceToLeft) - ttContainerWidth;

            if (wide && left) {
                tooltipWidth = (spaceToLeft > 800)
                    ? 700
                    : spaceToLeft - 100;
            }
            else if (wide) {
                tooltipWidth = (spaceToRight > 800)
                    ? 700
                    : spaceToRight - 100;
            }

            if (left) {
                const startingPositionLeft = spaceToLeft - tooltipWidth; // minus tooltipWidth b/c right corner of toolTip is flush w/ left edge of toolTip container
                setDimensions({
                    offsetTop,
                    offsetLeft: startingPositionLeft - horizontalPadding,
                    width: tooltipWidth
                });
            }
            else {
                const startingPositionLeft = spaceToLeft + ttContainerWidth; // plus ttContainerWidth b/c left corner of toolTip is flush w/ right edge of toolTip container
                setDimensions({
                    offsetTop,
                    offsetLeft: startingPositionLeft + horizontalPadding,
                    width: tooltipWidth
                });
            }
        }, 16);

        measureOffset();

        window.addEventListener("scroll", measureOffset);
        window.addEventListener("resize", measureOffset);

        return () => {
            window.removeEventListener("scroll", measureOffset);
            window.removeEventListener("resize", measureOffset);
        };
    }, [left, wide, offsetAdjustments.top]);

    const handleShowTooltip = () => {
        if (!controlledProps.isControlled) {
            setTooltip(true);
        }
        else {
            controlledProps.showTooltip();
        }
    };

    const handleCloseTooltip = () => {
        if (!controlledProps.isControlled) {
            setTooltip(false);
        }
        else {
            controlledProps.closeTooltip();
        }
    };

    const isTooltipVisible = (controlledProps.isControlled) ? controlledProps.isVisible : showTooltip;
    const style = Object.keys(dimensions)
        .reduce((acc, item) => {
            if (item === 'offsetLeft') return { ...acc, left: dimensions[item] };
            return { ...acc, [item]: dimensions[item] };
        }, {});

    let tooltip = null;

    if (isTooltipVisible) {
        tooltip = (
            <div className="tooltip-spacer" style={style}>
                <div className="tooltip" id="tooltip" role="tooltip">
                    <div className="tooltip__interior">
                        <div className={`tooltip-pointer ${left ? "right" : ""}`} />
                        <div className="tooltip__content">
                            <div className="tooltip__message">
                                {tooltipComponent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="tooltip-wrapper" style={styles}>
            <div ref={ref}>
                <div
                    role="button"
                    tabIndex="0"
                    className="tooltip__hover-wrapper"
                    onBlur={handleCloseTooltip}
                    onFocus={handleShowTooltip}
                    onKeyPress={handleShowTooltip}
                    onMouseEnter={handleShowTooltip}
                    onMouseLeave={handleCloseTooltip}
                    onClick={handleShowTooltip}>
                    {children}
                    {icon && tooltipIcons[icon]}
                </div>
                {tooltip}
            </div>
        </div>
    );
};

TooltipWrapper.propTypes = propTypes;

export default TooltipWrapper;
