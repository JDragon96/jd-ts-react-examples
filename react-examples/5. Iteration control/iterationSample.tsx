import {useState} from 'react';

const IterationSample = () =>{
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e:any) => setInputText(e.target.value);
    const onClick = () =>{
        // concat : 배열을 만드는 메소드
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        
        // [names, setNames] 에서
        // setNames에 값을 입력하는 것은 update를 의미한다.
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id: any) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const namesList = names.map(name =>(
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
    </li>));
    // const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )
};

export default IterationSample;