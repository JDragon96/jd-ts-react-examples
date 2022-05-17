/*
useEffect

=> 컴포넌트 렌더링될 때 마다 특정 작업을 수행하도록 한다.
*/
import React from 'react';

const Counter = () =>{
    const [name, setName] = React.useState('');
    const [nickName, setNickName] = React.useState('')

    //! 마운트될 때만 실행되는 useEffect
    // => 'name' 값만 변화될 때 실행된다.
	// => 언마운트 직전, 업데이트 직전 상황에서 실행
    React.useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
    }, [name]);

	// => 언마운트 직전에만 실행
    // React.useEffect(() => {
        // console.log("effect");
        // console.log(name);
        // return () => {
            // console.log("cleanup");
            // console.log(name);
        // };
    // }, []);

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

