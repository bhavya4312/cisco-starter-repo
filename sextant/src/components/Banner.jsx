import React from "react"

function Banner(props) {
    return (
        <div className="App-header">
            <h1>{props.topic}<span>{props.desc}</span></h1>
        </div>
    );
}

export default Banner;