export function bindFunc(args){
    var _this = args;
    console.log('args',args.__proto__);
    var newArgs = args.__proto__
    var hasNotFunction = [
        'constructor',
        'componentWillMount',
        'render',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUnmount',
        'forceUpdate'
    ];
    
    for(var props in newArgs){
        console.log('props',props);
        // if( props in args && args.hasOwnProperty(props) ){
        //     console.log(123,props);
        //     args[props] = args[props].bind(_this)
        // }
    }
}