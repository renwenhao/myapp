import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' 
import { BrowserRouter,HashRouter,Route,Link,Switch ,Redirect} from 'react-router-dom'
import './index.css';

import * as serviceWorker from './serviceWorker';
import reducer from './reducer'
import Login from './Login'
import DashBoard from './DashBoard'
console.log('reducer',reducer);
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ?  window.devToolsExtension() : f => f
));

class Test extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('test props:',this.props);
        return (
              <h1>
                  测试组件{this.props.match.params.aaa}
              </h1>
        )      
    }
}
ReactDOM.render((<Provider store = {store}>
    <HashRouter>
        <Switch>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/dashboard" component={DashBoard}></Route>
            <Redirect to="/login"></Redirect>
        </Switch>
    </HashRouter>
</Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// babel < 7 cnpm install babel-plugin-transform-decorators-legacy --save-dev (connect装饰器插件)
// babel > 7 cnpm install @babel/plugin-proposal-decorators --save-dev  ("plugins": [ ["@babel/plugin-proposal-decorators", { "legacy": true }]] )
 