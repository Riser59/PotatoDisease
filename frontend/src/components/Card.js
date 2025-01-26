import React from 'react'


export default function Card(props) {
    let cardStyle = {
        borderRadius: "2px",
        margin: "10px auto",
        width: "40%",
        height: "100%",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(198, 199, 246)",
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        position: "relative",
    };
    return (
        <div style={cardStyle}>
            <props.Comp/>
        </div>
    )
}
