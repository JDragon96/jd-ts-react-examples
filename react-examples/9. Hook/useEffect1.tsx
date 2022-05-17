/*
useEffect

=> 컴포넌트 렌더링될 때 마다 특정 작업을 수행하도록 한다.
*/
import React from 'react';

const Counter = () =>{
    const [name, setName] = React.useState('');
    const [nickName, setNickName] = React.useState('')
	
    //! 렌더링 떄 마다 실행되는 useEffect
    React.useEffect(()=>{
        console.log("렌더링이 완료되었습니다.");
        console.log({
            name,
            nickName
        });
    });

    //! 마운트될 때만 실행되는 useEffect
    React.useEffect(() => {
        console.log("마운트될 때 실행됩니다.");
    }, []);


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