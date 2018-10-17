import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        console.log('Test props',this.props);
        return <h3>
            当前的路由是{this.props.match.url}
        </h3>
    }
}

export default Test