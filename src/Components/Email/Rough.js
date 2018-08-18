import React from "react";

const Rough = props => {
    return (
        <div
            className="Rough"
            onClick={() => {
                props.showOneEmail(props.id);
            }}
        >
            <h2>{props.subject}</h2>
            <p>
                <span className="layoutPL">{props.from}</span>{" "}
                <span className="layoutPR">{props.time}</span>
            </p>
        </div>
    );
};

export default Rough;
