import React from 'react';
import { connect } from 'react-redux';
import { login ,getUserData} from './reducer/auth'
import { Redirect } from 'react-router-dom'
@connect(state=>state.auth,{login,getUserData})
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if(!! this.props.isAuth){
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps){
        console.log('nextProps',nextProps);
        if(!!nextProps.isAuth){
            this.props.history.push('/dashboard');
        }
    }
    componentDidMount(){
        this.props.getUserData();
    }
    render(){
        // const { isAuth } = this.props;
        return <h2>
            <p>我的名字是{this.props.user},年龄{this.props.age}</p>
            你没有权限查看，需要登录
            <button onClick = {this.props.login}>登录</button>
        </h2>
    }
}

export default Login;