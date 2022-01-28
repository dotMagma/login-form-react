import React from 'react';

import './css/SideImage.css';

function SideImage(props) {
    return (
        <div id="side-img" className={props.img} />
    );
}

export default SideImage;