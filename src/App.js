import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import axios from 'axios'
import { addGun ,removeGun,addGunAsync,reset} from './reducer/test'
import Solider from './Solider'
@connect((state)=>{
  return {
    num : state.counter
  }
},{addGun ,removeGun,addGunAsync,reset})
class App extends Component {
  render() {
    const {num,addGun,removeGun,addGunAsync} = this.props;
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick = {addGun}>申请武器</button>
        <button onClick = {removeGun}>上交武器</button>
        <button onClick = {addGunAsync}>两秒后拿武器</button>
      </div>
      
    );
  }
}
// App = connect(state=>({state}),{addGun ,removeGun,addGunAsync})(App);
export default App;
