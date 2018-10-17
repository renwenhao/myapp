import React from 'react';
import {Link ,Route ,Switch} from 'react-router-dom'
import App from './App';
import Test from './Test';
import { connect } from 'react-redux';
import { loginout } from './reducer/auth'

@connect(state=>({isAuth : state.auth.isAuth}),{loginout})
class DashBoard extends React.Component{
    componentWillMount(){
        if(! this.props.isAuth){
            this.props.history.push('/login');
        }
    }
    componentWillReceiveProps(nextProps){
        if(! nextProps.isAuth){
            this.props.history.push('/login');
        }
    }
    render(){
        // console.log('render dashboard');

        
        //这种方式写会引起warning
        // if( !this.props.isAuth){
        //     this.props.history.push('/login')
        //     // return null;
        // }
        return (
            <div >
                <h1>DashBoard <button onClick={this.props.loginout}>登出</button></h1>
                <ul>
                    <li>
                        <Link to="/dashboard/">App</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/erying">Erying</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/qibinglian">Qibinglian</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path = "/dashboard/" exact component={App}></Route>
                    <Route path = "/dashboard/erying"  component={()=>(<h2>二营</h2>)}></Route>
                    <Route path = "/dashboard/qibinglian"  component={()=>(<h2>骑兵连</h2>)}></Route>
                    <Route path = "/dashboard/:location" component={Test}></Route>
                </Switch>
            </div>
            
        );
    }
}

export default DashBoard;