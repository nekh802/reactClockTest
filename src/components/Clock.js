// clock.js
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
      super(props);
      this.state = {date : new Date()};
    }
  
    // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
    componentDidMount(){
      this.timerId = setInterval(
        () => this.tick(), 1000
      )
    }
  
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
  
    tick() {
      this.setState({
        date : new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2> {this.state.date.toLocaleTimeString()} </h2>
        </div>
      );
    }
  
}   

export default Clock;