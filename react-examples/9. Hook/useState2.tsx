/*
하나의 useState 함수는 하나의 상태 값만 컨트롤할 수 있다.
=> 관리해야 할 상태값이 여러개면, 여러번 쓰면 된다.
*/
import React from 'react';

const Counter = () =>{
    const [name, setName] = React.useState('');
    const [nickName, setNickName] = React.useState('')

    const onChangeName = (e:any) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e: any) => {
        setNickName(e.target.value);
    }
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <b>이름 : </b>{name}
            </div>
            <div>
                <b>닉네임 : </b>{nickName}
            </div>
        </div>
    );
};

export default Counter;

