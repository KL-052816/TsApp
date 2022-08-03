import React, {PureComponent} from 'react';
import CustomisedAll from '../compontent/Memo/CustomisedComponen';

export default class A extends PureComponent {
    // render(): react.ReactDOM {
    //     return <div>1233</div>;
    // }
    render(): React.ReactNode {
        return (
            <div>
                123
                <CustomisedAll />
            </div>
        );
    }
}
