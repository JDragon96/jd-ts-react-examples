/*
useReducer

- 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해줌
==> action : 업데이트를 위한 정보를 담는다.
==> 
*/
import React from 'react';

function reducer(state: any, action: any){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () =>{
    // useReducer(리듀서 함수, 리듀서 기본값)
    const [state, dispatch] = React.useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은<b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button> 
        </div>
    );
};

export default Counter;

