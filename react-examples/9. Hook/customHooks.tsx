import React from 'react';

function reducer(state: any, action: any){
    return{
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm: any){
    const [state, dispatch] = React.useReducer(reducer, initialForm);
    const onChange = (e:any) =>{
        dispatch(e.target);
    };
    return [state, onChange];
}

/////////////////////////


/*
Hook 커스텀하기
- 로직 재사용 가능
- 
*/
import React from 'react';
import useInputs from './useInputs';

const Average = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname:''
    });

    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <b>이름 : </b>{name}
            </div>
            <div>
                <b>닉네임 : </b>{nickname}
            </div>
        </div>
    );
}

export default Average;