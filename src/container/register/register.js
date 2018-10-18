import React from 'react'
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WhiteSpace ,WingBlank ,Radio} from 'antd-mobile'
import {connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {register} from '../../redux/user.redux'
const RadioItem = Radio.RadioItem;

export default @connect(state=>state.user,{register}) class extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this)
    }
    state = {
        value:0,
        username:'',
        password:'',
        repassword:'',
    }
    changeHandle(e){
        this.setState({
            value:e
        })
    }
    change(key,value){
        this.setState({
            [key]:value
        });
    }
    register(){
        console.log('this.state',this.state);
        this.props.register(this.state)
    }
    componentWillUnmount(){
        
    }
    render(){
        const { value, value2, value3, value4 } = this.state;
        const data = [
            { value: 0, label: 'boss' },
            { value: 1, label: '牛人' },
        ];
        
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo/>
                {/* <h1>我是注册页面</h1> */}
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
              onChange={(v)=>{this.change('username',v)}}
            >用户名</InputItem>
          </WingBlank>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
          <InputItem
            type="password"
            clear
            placeholder="请输入密码"
            ref={el => this.inputRef = el}
            onChange={(v)=>{this.change('password',v)}}
          >密码</InputItem>
          </WingBlank>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
          <InputItem
            type="password"
            clear
            placeholder="请输入密码"
            ref={el => this.passqr = el}
            onChange={(v)=>{this.change('repassword',v)}}
          >确认密码</InputItem>
          </WingBlank>
          <WingBlank>
          <List renderHeader={() => '请选择身份'}>
                {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => {
                    this.changeHandle(i.value)
                }}>
                    {i.label}
                </RadioItem>
            ))}
            </List>
          
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
          <Button type="primary" onClick={this.register}>注册</Button>
          <WhiteSpace></WhiteSpace>
          <div style={{textAlign:'right'}}>
            <a href="javascript:;" onClick={()=>{
                this.props.history.push('/login');
            }}>返回登录</a>
          </div>
        </WingBlank>

        <WhiteSpace />

        </div> 
        );
    }
}