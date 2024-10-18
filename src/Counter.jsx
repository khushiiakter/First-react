import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    function handleCount (){
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleRemove=()=>{
        setCount(count-1);
    }
    return (
        <div style={{
            border: "3px solid black", 
            padding: "10px", 
            margin: "10px",
            borderRadius: "50px"
            }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}