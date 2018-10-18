import React from 'react'
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WhiteSpace ,WingBlank} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import {bindFunc} from '../../utils'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

export default @connect(state=>state.user,{login}) class extends React.Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this)
  }
  state = {
    username:'',
    password:''
  }
  handleClick(){
    this.inputRef.focus();
  }
  componentWillMount(){

  }
  componentDidMount(){
    
  }
  register(){
    this.props.history.push('/register');
  }
  changeHandle(key,value){
    this.setState({
      [key]:value
    })
  }
  login(){
    this.props.login(this.state)
  }
  render() {
    console.log('this.props===',this.props)
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
        <Logo />
        {/* <h1>我是登录页面</h1> */}
        
        <List renderHeader={() => ''}>
          <div ref={el=>this.el = el}>
              <WingBlank>
                  {this.props.msg ? <p style={{'color':'red','paddingTop':'10px'}}>{this.props.msg}</p> : null}
              </WingBlank>
            </div>
          <WingBlank>
            <InputItem
              clear
              placeholder="请输入用户名"
              ref={el => this.autoFocusInst = el}
              onChange={(v)=>{this.changeHandle('username',v)}}
            >用户名</InputItem>
          </WingBlank>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
          <InputItem
            type="password"
            clear
            placeholder="请输入密码"
            ref={el => this.inputRef = el}
            onChange={(v)=>{this.changeHandle('password',v)}}
          >密码</InputItem>
          </WingBlank>
          
          {/* <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick.bind(this)}
            >
              click to focus
            </div>
          </List.Item> */}
        </List>

        <WhiteSpace />

        <WingBlank>
          <Button type="primary" onClick = {this.login}>登陆</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick = {this.register.bind(this)}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}