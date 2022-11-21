import React from "react"

function Banner(props) {
    return (
        <div className="App-header">
            <h1>{props.banner}</h1>
        </div>
    );
}

export default Banner;