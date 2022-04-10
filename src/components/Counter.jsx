import React, {useState} from "react"

const Counter = function () {
    const [count, SetCount] = useState(0)

    function increment() {
        SetCount(count + 1)
    }

    function dencrement() {
        SetCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={dencrement}>Decrement</button>
        </div>    
    )
}  

export default Counter;