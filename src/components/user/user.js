import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom' 

export default @withRouter class extends React.Component{
    componentDidMount(){
        axios.get('/user/info').then(res=>{
            console.log('res',res);
            if(res.data.code == 1){
                this.props.history.push('/login');
            }else{
                
            }
        });
    }
    render(){
        return null; 
    }
}