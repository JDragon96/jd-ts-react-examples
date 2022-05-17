/*
useCallback
- 컴포넌트가 처음 렌더링될 때만 함수 실행
- 렌더링이 자주 발생할 때 적용하면 된다.
- [] : 한 번만 실행
- [number, list] : number와 list가 변할 때 실행
*/
import React from 'react';

const getAverage = (numbers: any) =>{
    console.log("평균값 계산 중");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a: any, b:any) => a + b);
    return sum / numbers.length;
}

const Average = () =>{
    // State
    const [list, setList] = React.useState<Array<number>>([]);
    const [number, setNumber] = React.useState<string>('');

    // METHOD
    // => 여기서 useCallback() 사용
    // => 컴포넌트가 처음 렌더링될 때만 함수 실행
    // const onChange = (e:any) => {
    //     setNumber(e.target.value);
    // };
    const onChange = React.useCallback((e:any) => {
        setNumber(e.target.value);
    }, []);

    // const onInsert = (e:any) => {
    //     let num: number = parseInt(number);
    //     const nextList = list.concat(num);
    //     setList(nextList);
    //     setNumber('');
    // };
    const onInsert = React.useCallback(()=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    // MEMO
    // 특정 값이 변했을 때([list]) getAverage() 메소드가 실행되도록 함
    const avg = React.useMemo(() => getAverage(list), [list]);

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
}

export default Average;