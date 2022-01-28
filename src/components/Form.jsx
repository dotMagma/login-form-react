import React from 'react';

import './css/Form.css';

function Form(props) {
    return (
        <form method={props.method} action={props.action}>
            {props.children}
        </form>
    );
}

export default Form;
