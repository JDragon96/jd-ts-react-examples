import {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}: any) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((e: any) => {
        // 뭐지 매번 log가 찍히는데??
        setValue(e.target.value);
    }, []);

    // onSubmit과 onClick의 차이점
    // submit은 enter로도 이벤트 발생이 가능하다.
    const onSubmit = useCallback(
        (e: any) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, 
        [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
};

export default TodoInsert;