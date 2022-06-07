import React from 'react';
import Left from '../compontent/Left/left';
import Right from '../compontent/Right/right';
import Midin from '../compontent/Midin/midin';
import Exercise from './exercise';
import Axios from '../compontent/axios/index';
export default class App extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name:'首页'
    //     };
    // };
    // constructor(props: any) {
    //     super(props);
    //     this.state = {date: new Date()};
    // }

    componentDidMount() {
        console.log('挂载时app.tsx');
    }
    componentWillUnmount() {
        console.log('将要卸载app.tsx');
    }

    render() {
        return (
            <div>
                <div>
                    <Left />
                    <Right />
                    <Midin />
                    <Axios />
                </div>
                <div style={{marginTop:64}}>
                    <Exercise />
                </div>
            </div>
        );
    }
}
