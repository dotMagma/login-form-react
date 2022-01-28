import React from 'react';

import './css/Button.css';

function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className="button">
            {props.children}
        </button>
    );
}

export default Button;
