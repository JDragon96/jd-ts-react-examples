/*
useMemo
- useMemo를 사용하면 컴포넌트 내부 연산을 최적화 할 수 있다.
- 아래 예시는, input에 내용 입력 시 지속적으로 getAverage가 호출됨
=> useMemo 이용해서 해결 가능
==> useMemo 예시 확인
*/
import React from 'react';

const getAverage = (numbers: any) =>{
    console.log("평균값 계산 중");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a: any, b:any) => a + b);
    return sum / numbers.length;
}

const Average = () =>{
    const [list, setList] = React.useState<Array<number>>([]);
    const [number, setNumber] = React.useState<string>('');

    // METHOD
    const onChange = (e:any) => {
        setNumber(e.target.value);
    };
    const onInsert = (e:any) => {
        let num: number = parseInt(number);
        const nextList = list.concat(num);
        setList(nextList);
        setNumber('');
    };

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
                <b>평균값 : </b>{getAverage(list)}
            </div>
        </div>
    );
}

export default Average;