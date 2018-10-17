import React from 'react'

class Solider extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('this.props.lists',this.props.lists);
        return <ul>
            {
                this.props.lists.map(item=>{
                    return <li key = {item._id}>{item.user}_{item.age}</li>
                })
            }
        </ul>
    }
}

export default Solider