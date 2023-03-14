import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
    const [counter, dispatch] = useReducer(counterReducer, 0);
    return (
        <div id="main">
            <span id="counter">{counter}</span>
            <button
                id="decrement-btn"
                onClick={() => dispatch({ type: "dec" })}
            >
                decrement btn
            </button>
            <button
                id="increment-btn"
                onClick={() => dispatch({ type: "inc" })}
            >
                increment btn
            </button>
        </div>
    );
};

export default App;