/*
useReducer

- 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해줌
==> action : 업데이트를 위한 정보를 담는다.
==> 
*/
import React from 'react';

function reducer(state: any, action: any){
    // action : 컨트롤
    // => input과 같은 컨트롤을 의미한다.
    // state : 컴포넌트의 state
    return{
        ...state,
        [action.name]: action.value
    };
}

const Counter = () =>{
    // useReducer(리듀서 함수, 리듀서 기본값)
    const [state, dispatch] = 
        React.useReducer(reducer, 
            {
                name: '',
                nickname: ''
            });

    // 컴포넌트의 상태 정의
    const {name, nickname} = state;

    const onChange = (e:any) => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Counter;