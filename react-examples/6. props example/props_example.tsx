// props에 원하는 데이터 타입을 집어넣기 위해 사용하는 방법
import {Component, ReactNode} from 'react';

type Props = {
    name: string;
}

const Hello: React.FC<Props> = ({name}) => (
    <div>
        Hello, {name}!
    </div>
)

export default Hello;

/*
import React from 'react';
import './App.css';
import Hello from './props_example.tsx';

class App extends Component{
  render(): React.ReactNode {
      return (
        <Hello name="stt"/>
      );
  }
}

export default App;
*/