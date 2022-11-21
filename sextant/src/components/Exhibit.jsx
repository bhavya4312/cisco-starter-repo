import React from "react"

function Exhibit(props) {
    return (
      <div className="note">
        <h1>{props.heading}</h1>
        <div>
            {props.children}
        </div>
      </div>
    );
}

export default Exhibit;