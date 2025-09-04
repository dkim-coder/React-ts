import { useState, useEffect } from "react";

function UseEffect(){
    const [count, setCount] = useState<number>(0);
    
    // state 는 변경되면 리렌더링을 발생시킴
    useEffect(() => {
        // setCount(count + 1);
        console.log("rendering");
    })

    return(
        <div>
            <p>conunt : {count}</p>
            <button onClick={() => setCount(count + 1)}>count 증가</button>
        </div>
    );
}

export default UseEffect;