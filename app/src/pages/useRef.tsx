import {useState,useRef, useEffect} from "react"

function UseRef(){
    // const [count, setCount] = useState<number>(0);
    // const ref = useRef<number>(0);

    // return(
    //     <div>
    //         <p>Count : {count}</p>
    //         <p>Ref : {ref.current}</p>
    //         <button onClick={() => setCount(pre => pre + 1)}>count 버튼</button>
    //         <button onClick={() => ref.current = ref.current + 1}>ref 버튼</button>
    //     </div>
    // );

    const inputRef = useRef<any>(0);
    
    useEffect(() => {
        inputRef.current.foucus();
    }, [])

    return(
        <div>
            <input ref={inputRef} type='text' placeholder="입력"></input>
            <button onClick={() => {
                alert(`환영합니다 ${inputRef.current.value}`);
            }}>로그인</button>
        </div>
    );
}

export default UseRef;