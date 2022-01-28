import React from 'react';

import './css/Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="title">
                <div className={'title-img ' + props.img}></div>
                <h1>{props.title}</h1>
            </div>
            <p>{props.children}</p>
        </div>
    );
}

export default Header;