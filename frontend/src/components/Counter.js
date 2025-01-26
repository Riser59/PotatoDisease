import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';

export default function Counter() {
    let counterStyle = {
        borderRadius: "2px",
        margin: "10px auto",
        width: "30%",
        height: "100%",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(198, 199, 246)",
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "4px",
    };
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const handleInc = () => {
        dispatch(increment());
    };
    const handleDec = () => {
        dispatch(decrement());
    };
    return (
        <div className='container' style={counterStyle}>
            <button onClick={handleInc} style={{background: "#000", color: '#fff', padding: "0.5rem", borderRadius: '4px'}}>+</button>
            <span>Count: {count}</span>
            <button onClick={handleDec} style={{background: "#000", color: '#fff', padding: "0.5rem", borderRadius: '4px'}}>-</button>
        </div>
    )
}
