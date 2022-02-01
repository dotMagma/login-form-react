import react, { createElement } from 'react';

import './css/Input.css';

function Input(props) {

    var eye;
    if (props.type === 'password') eye = createElement('button', {type: 'button', className: 'eye'});

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
                {eye}
            </div>
        </>
    );
}

export default Input;
