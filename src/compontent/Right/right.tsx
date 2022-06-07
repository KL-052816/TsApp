import React from "react";

export default class Right extends React.PureComponent {
    
    constructor(props:any){
        super(props);
        // this.state ={
        //     name:'zhangsan',
        // };
        console.log('@@@@@constructor')
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('挂载时right.tsx','componentDidMount');
    }
    componentWillUnmount() {
        console.log('将要卸载right.tsx','componentWillUnmount');
    }

    render(){

        return (
            <div>
                right
            </div>
        )
    }
}