import React from "react";
// import React, {LegacyRef, useRef, useEffect} from 'react';
// import styles from './index.less';

// interface MessageInputProps {
//     onChange?: (message: string) => void;
//     title?: String;
//     type: 0 | 1 | 2; // 0: 自报价 ,1: offer价 , 2 微信企业号
// }

// const msgTemplate = title => [
//     {
//         tmp: `hello，<span contenteditable="false" class="word-tag">#达人昵称#</span>，${title}，经过爱种草的后台数据匹配，品牌对你的意向很大,邀请你来合作～如果您感兴趣，可以报名：<span contenteditable="false" class="word-tag">#任务链接#</span>`,
//         tabList: ['添加任务链接', '添加达人昵称'],
//     }, // 自报价
//     {
//         tmp: `hello，<span contenteditable="false" class="word-tag">#达人昵称#</span>，${title}，经过爱种草的后台数据匹配，品牌对你的意向很大，邀请你来合作～本次合作价格：<span contenteditable="false" class="word-tag">#offer价#</span>，合作形式：<span contenteditable="false" class="word-tag">#合作形式#</span>，如果您感兴趣，可以报名：<span contenteditable="false" class="word-tag">#任务链接#</span>`,
//         tabList: ['添加任务链接', '添加达人昵称', '添加offer价', '添加合作形式'],
//     }, // offer价
//     {
//         tmp: `${title}向你发送了专属合作邀约`,
//         tabList: ['添加任务品牌'],
//     }, // 企业微信 投放内容
// ];

// let lastEditRange;

// function stopEvent(event) {
//     event.stopPropagation();
// }

// function domFocus(dom) {
//     dom.focus();
//     if (window.getSelection) {
//         const selection = window.getSelection();
//         if (lastEditRange) {
//             // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
//             selection.removeAllRanges();
//             selection.addRange(lastEditRange);
//         } else {
//             // 不存在光标对象，则将光标定位到最后的位置
//             selection.selectAllChildren(dom);
//             selection.collapseToEnd();
//         }
//         return selection;
//     }
//     return null;
// }

// function insertAfterOrResetText(dom, html) {
//     const selection = domFocus(dom);
//     if (selection) {
//         const range = selection.getRangeAt(0);
//         const el = document.createElement('div');
//         el.innerHTML = html;
//         range.deleteContents();
//         const span = el.firstChild;
//         (span as HTMLElement).onclick = stopEvent;
//         // 插入节点
//         range.insertNode(span);
//         range.collapse(false);
//         // 清空selection额外属性
//         selection.removeAllRanges();
//         selection.addRange(range);
//     }
// }

// function setEditRange() {
//     // 获取选定对象
//     const selection = getSelection();
//     // 设置最后光标对象
//     lastEditRange = selection.getRangeAt(0);
// }

// // 判断字节长度+++=   num规定的长度
// function getByteLength(str = '', num) {
//     let len = 0; // 字符串的字节数
//     let i = 0; // 在达到num时str的第几位
//     for (i; i < str.length; i++) {
//         if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
//             len += 3;
//         } else {
//             len += 1;
//         }
//         if (len > num) {
//             return i;
//         }
//     }
// }
// // 判断是否可以点击任务品牌
// let click = true;

// // 短信编辑框
// const MessageInputs = React.forwardRef(
//     ({onChange, title, type = 1}: MessageInputProps, ref: LegacyRef<HTMLDivElement>) => {
//         const editBox = useRef(null);
//         useEffect(() => chooseOrResetWordTag(null, 0), [type]);
//         const chooseOrResetWordTag = (event, name) => {
//             if (event) {
//                 insertAfterOrResetText(
//                     editBox.current,
//                     type === 2
//                         ? `<span contenteditable="false" class="word-tag">${name}</span>`
//                         : `<span contenteditable="false" class="word-tag">#${name}#</span>`
//                 );
//             } else {
//                 editBox.current.innerHTML = msgTemplate(title)[type as any].tmp;
//                 domFocus(editBox.current);
//             }
//             triggerChange();
//         };

//         const handleKeyEvent = () => setEditRange();
//         const triggerChange = (e?) => {
//             const {innerText} = editBox.current as unknown as {innerText: string};
//             if (getByteLength(innerText, 63)) {
//                 e && e.preventDefault();
//                 click = false;
//                 editBox.current.innerText = innerText.substring(0, getByteLength(innerText, 63));
//                 onChange && onChange(innerText.substring(0, getByteLength(innerText, 63)));
//             } else {
//                 click = true;
//                 onChange && onChange(innerText);
//             }
//             // 获取选定对象
//             const selection = getSelection();
//             // 设置最后光标对象在最后
//             selection.selectAllChildren(editBox.current);
//             selection.collapseToEnd();
//         };

//         return (
//             <div ref={ref}>
//                 <div
//                     onClick={setEditRange}
//                     className={`f14 ${styles['input-box']} ${
//                         type === 2 && styles['input-box-type']
//                     }`}
//                     onKeyUp={handleKeyEvent}
//                     suppressContentEditableWarning
//                     onInput={e => triggerChange(e)}
//                     ref={editBox}
//                     contentEditable
//                 />
//                 <div className="df mt12">
//                     {msgTemplate(title)[type as any].tabList.map((v, i) => (
//                         <div
//                             key={i}
//                             style={{color: '#A06EF8', cursor: 'pointer', marginRight: 10}}
//                             onClick={e => {
//                                 click && chooseOrResetWordTag(e, title);
//                             }}
//                         >
//                             #{v}
//                         </div>
//                     ))}
//                     {type === 2 && <span style={{color: '#F53B3B'}}>最多20个字</span>}
//                 </div>
//             </div>
//         );
//     }
// );

// export default MessageInputs;
