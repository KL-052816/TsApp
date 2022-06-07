import React from 'react';
import Cnum from '../compontent/exercise/c/Cnum';
import Fnum from '../compontent/exercise/f/Fnum';

interface exercises {
    cnum?:number;
    fnum?:number
}

export default class exercise extends React.PureComponent<any,exercises> {
    public data:{name:string,age:number};
    constructor(props:any) {
        super(props);
        this.state={
            cnum: 0,
            fnum: 0,
        }; 
        this.data = {
            name:'zhangsan',
            age:13
        }
    }
    checkoutNum = (num: number, type?: string) => {
        if(type === 'fnum'){
            this.setState({
                cnum:Math.ceil((num-32)*500/9)/100
            })
        }
        if(type === 'cnum'){
            this.setState({
                fnum:Math.ceil((num*9/5)*100 +32)/100
            })
        }
        console.log('num',num,this.state)
    };
    render() {
            console.log('num',this.state.cnum)
        return (
            
            <div>
                111
                <Cnum checkoutNum={this.checkoutNum} cnums={this.state.cnum}/>
                <Fnum checkoutNum={this.checkoutNum} fnums={this.state.fnum}/>
            </div>
        );
    }
}
