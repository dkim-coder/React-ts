import { useState, useMemo } from "react";

const easyCalc = (param: number) => {
    return param + 1;
}

const hardCalc = (param: number) => {
    for(let i = 0; i < 999999999; i++)  // too many times
    return param + 1;
}

export default function(){
    const [easyNumber, setEasyNumber] = useState<number>(0);
    const [hardNumber, setHardNUmber] = useState<number>(0);

    const easy = easyCalc(easyNumber);
    // state 바뀌면 계속 렌더링 되는데 이게 계속 호출되는것이 무의미하게 시간을 많이 잡아먹는 작업임으로 최적화를 위한 useMemo 사용
    const hard = useMemo(() => {
        return hardCalc(hardNumber);
    }, [hardNumber]);

    return(
        <>
            <input
                type='number'
                value={easyNumber}
                onChange={e => setEasyNumber(parseInt(e.target.value))}
            />
            <span>easyNumber: {easyNumber}</span>
        </>
    );
}