import React from 'react'
import './logo.css'
import img from '../../assets/timg.jpg'
export default class extends React.Component{
    render(){
        return (
            <div className={'logo'}>
                <img src={img} alt=""/>
            </div> 
        );
    }
}