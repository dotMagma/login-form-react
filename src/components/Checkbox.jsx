import React, { useState } from 'react';

import './css/Checkbox.css';

function Checkbox(props) {

    return (
        <>
            <div className="check-box">
                <input
                    type="checkbox"
                    name={props.id}
                    id={props.id}
                    defaultChecked={props.checked}
                />
                <label htmlFor={props.id} className="check-box-label">
                    {props.label}
                </label>
            </div>
        </>
    );
}

export default Checkbox;
