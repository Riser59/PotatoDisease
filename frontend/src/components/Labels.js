import React from 'react'
import { useSelector } from 'react-redux';

export default function Labels() {
    let dstyle = {
        borderRadius: "2px",
        textAlign: "center",
        cursor: "pointer",
        margin: "auto",
        height: "100%",
        color: "rgb(0,0,0)",
    };
    const lblres = useSelector(state => state.file.lblres);
    return (
        <div style={dstyle}>
            <h1>Labels</h1>
            <ul style={{ display: "grid", listStyle: "none" }}>
                <small>Category: {lblres["class"]}</small>
                <small>Confidence: {lblres["confidence"]}</small>
            </ul>
        </div>
    )
}
