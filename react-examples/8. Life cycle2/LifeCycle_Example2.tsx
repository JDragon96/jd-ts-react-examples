import React, {Component, ReactNode} from 'react';

interface LCProps{
    color: any
}

interface LCState {
  number: number,
  color: any
}

class LifeCycle_Example1 extends React.Component<LCProps, LCState>{
  constructor(props: any){
    super(props);
    console.log("LifeCycle constructor");
    this.state = {
      number: 0,
      color: null
    }
  }

  myRef:any = null;

  static getDerivedStateFromProps(nextProps: LCProps, prevState:LCState){
      console.log("getDerivedStateProps");

      // 이전 컬러와 변경 컬러가 다르다면?
      // => 갱신된 
      if(nextProps.color !== prevState.color){
          return {color: nextProps.color}
      }
      return null;
  }

  shouldComponentUpdate(nextProps: LCProps, nextState: LCState){
      console.log("shouldComponentUpdate", nextProps, nextState);
      return nextState.number % 10 !== 4;
  }

  render(): React.ReactNode {
    console.log("LC Render");
    const style = {
        color: this.props.color
    };

    return (
    <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
            {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
            더하기
        </button>
    </div>
    );
  }

  componentDidMount(){
      console.log("LC Component DidMOunt");
  }

  //// 버튼 클릭 이벤트
  handleClick = () => {
      this.setState({
        number: this.state.number + 1
      });
  }
}
export default LifeCycle_Example1;