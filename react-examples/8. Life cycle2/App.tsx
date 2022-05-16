import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import LifeCycle_Example1 from './LifeCycle_Example1';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

interface AppProps{

}

interface AppState{
  color: string
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props);
    this.state = {
      color: '#000000'
    }
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* color : LifeCycle_Exmaple1의 props(properties) */}
        <ErrorBoundary>
        <LifeCycle_Example1 color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
