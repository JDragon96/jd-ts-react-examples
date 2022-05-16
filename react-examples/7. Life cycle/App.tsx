/*
App의 DidMount는
1. App => constructor > WillMount > render
2. Parent => constructor > WillMount > render > DidMount
3. App => DidMount
순서로 Life Cycle이 동작한다.
*/
import * as React from 'react';

interface ParentProps{
    name: string;
}

interface ParentState{
    age: number;
}

// Component<P, S> ... 참고
class Parent extends React.Component<ParentProps, ParentState>{
    constructor(props: {name:string}){
        console.log("Paranet constructor");
        super(props);
        this.state = {
            age: 31
        };
        this._addAge = this._addAge.bind(this);
    }

    componentWillMount(){
        console.log("Parent component will mount!");
    }

    componentDidMount(){
        console.log("Parent component Did mount");
    }

    render(): React.ReactNode {
        console.log("Parent render");

        const {name} = this.props;
        const {age} = this.state;

        return (
            <div className="Parent">
                <h1>Hello {name}</h1>
                <h1>age : {age}</h1>
                <button onClick={this._addAge}>나이 추가</button> 
            </div>
        )
    }

    private _addAge(): void {
        this.setState({
            age: this.state.age + 1
        });
    }
}

export default Parent;