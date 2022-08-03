import React, {useMemo, useState} from 'react';

interface CustomisedComponenLiTask {
    props: any;
}

export function CustomisedComponen(props: any) {
    console.log('1234', props);
    const {name, sex} = props.props || {};
    return (
        <div>
            <div></div>

            <div>{name}</div>
            <div>{sex}</div>
        </div>
    );
}

export function CustomisedComponenLi({props}: CustomisedComponenLiTask) {
    console.log('1234', props);
    const {name, sex, success} = props || {};
    return (
        <div>
            <div>{name}</div>
            <div>{sex}</div>
            <div>{success}</div>
        </div>
    );
}
function CustomisedAll() {
    const [message, setMessage] = useState<any>({name: 'zhangsan', sex: 1});
    const [info, setInfo] = useState<any>({name: 'lisi', sex: 1, success: 10});
    const handClick = () => {
        const s = {
            name: message.name,
            sex: !message.sex,
        };
        setMessage(s);
    };
    const handClickLisi = () => {
        const s = {
            name: info.name,
            sex: info.sex,
            success: (info.success += 1),
        };
        setInfo(s);
    };
    return (
        <div>
            <div
                onClick={() => {
                    handClick();
                }}
            >
                点击
            </div>
            <div
                onClick={() => {
                    handClickLisi();
                }}
            >
                改变李四的成绩
            </div>
            {<CustomisedComponen props={message} />}
            <CustomisedComponenLi props={info} />
        </div>
    );
}
React.memo(CustomisedComponen);

export default CustomisedAll;
