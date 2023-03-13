import React from "react";

export default function ProgressBar(props) {

    const value = props.value;

    return(
        <div className="progressbar" style={{color:"black"}}>
            <div style={ {backgroundColor: value >= 1 && "red" } } className="progress-step">1</div>
            <div style={ {backgroundColor: value >= 2 && "red" } } className="progress-step">2</div>
            <div style={ {backgroundColor: value >= 3 && "red" } } className="progress-step">3</div>
        </div>
    );
}