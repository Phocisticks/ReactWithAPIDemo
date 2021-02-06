import React from 'react';
const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export const Good = () => <Emoji symbol="✅" />
export const Bad = () => <Emoji symbol="❌" />