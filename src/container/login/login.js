import React from 'react'
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WhiteSpace ,WingBlank} from 'antd-mobile'
import {bindFunc} from '../../utils'
export default class extends React.Component {
  constructor(props){
    super(props);
    console.log('this',this);
    bindFunc(this)
  }
  state = {

  }
  handleClick(){

  }
  componentWillMount(){

  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Logo />
        <h1>我是登录页面</h1>
        <List renderHeader={() => ''}>
          <InputItem
            clear
            placeholder="请输入用户名"
            ref={el => this.autoFocusInst = el}
          >用户名</InputItem>
          <InputItem
            type="password"
            clear
            placeholder="请输入密码"
            ref={el => this.inputRef = el}
          >密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <WhiteSpace />

        <WingBlank>
          <Button type="primary">登陆</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}