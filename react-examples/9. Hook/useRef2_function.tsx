/*
useRef
- 함수 컴포넌트에서 쉽게 ref를 사용할 수 있게 한다.
- useRef의 current는 실제 일리먼트를 가리킨다.
- 아래와 같은 방법으로 "등록" 버튼을 눌러도, input에 커서가 남는다.
*/
import React from 'react';

const Average = () => {
    const id = React.useRef(1);
    const setId = (n: number) =>{
        id.current = n;
    }

    const printId = () => {
        console.log(id);
    }

    return(
        <div>
            <div>
                <button onClick={printId}>테스트</button>
            </div>
            <div>
                MyComponent
            </div>
        </div>
    );
}

// class Average extends React.Component{
//     id:number = 1;
//     setId = (n: number) => {
//         this.id = n
//     }

//     printId = () => {
//         console.log(this.id);
//     }

//     render(): React.ReactNode {
//         return(
//             <div>
//                 <button onClick={this.printId}>테스트</button>
//                 MyComponent
//             </div>
//         );
//     }
// }

export default Average;