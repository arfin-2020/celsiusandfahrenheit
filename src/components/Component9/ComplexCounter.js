import React, { useReducer } from "react";

const initialState = {
    counter: 0,
    counter2: 0,
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case "increment": {
            return { ...currentState, counter: currentState.counter + action.value };
        }

        case "decrement": {
            return { ...currentState, counter: currentState.counter - action.value };
        }
        case "increment2": {
            return { ...currentState, counter2: currentState.counter2 + action.value };
        }

        case "decrement2": {
            return { ...currentState, counter2: currentState.counter2 - action.value };
        }
        default:
            return currentState;
    }
};
const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <p>{count.counter}</p>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment", value: 5 })}
                >
                    Increment by 1
                </button>

                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement", value: 5, })}
                >
                    Decrement by 5
                </button>
            </div>
            <div>
                <p>{count.counter2}</p>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment2", value: 5 })}
                >
                    Increment by 1
                </button>

                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement2", value: 5, })}
                >
                    Decrement by 5
                </button>
            </div>
        </div>
    );
};
export default ComplexCounter;
