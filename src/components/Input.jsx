import React from 'react';

import './css/Input.css';

function Input(props) {
    return (
        <>
            <label htmlFor={props.id} className="input-label">
                {props.label}
            </label>
            <div className={'input ' + props.img}>
                <input
                    type={props.type}
                    name={props.id}
                    id={props.id}
                    placeholder={props.children}
                />
            </div>
        </>
    );
}

export default Input;
