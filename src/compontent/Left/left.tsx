
import React, { useCallback, useEffect, useMemo, useRef, useState} from "react";
import { useSetState } from "ahooks";
function Left(){
    const [data,setData] = useState(0)
    const [num,setNum] = useState(0)
    const count = useRef(0)
    count.current = data+num
    const onData = useCallback(()=>{
        console.log('222221111111122222222',data,num)
    },[])
    // const onNum = useEvent
    useEffect(()=>{
        onData()
    },[data])
    useEffect(()=>{
        console.log('num',data,num)
    },[num])
    useMemo(()=>{console.log('data+num',data,num)},[num])
    useEffect(()=>{
        const timer = setTimeout(()=>{
            // console.log('data111111111',data)
        onData()
    },3000)
        return ()=>{
            clearTimeout(timer);
        }
    },[])
    useEffect(()=>{
        const timer = setTimeout(()=>{
            // console.log('num!!!!!!!!!!!!!',count.current)
            console.log('num!!!!!!!!!!!!!',data,num)},3000)
        return () => {
            clearTimeout(timer)
        }
    },[data,num])
    return(<div>2
        <div style={{color:'red'}} onClick={()=>setData(data+2)}>
            点击data
        </div>
        <div style={{color:'green'}} onClick={()=>setNum(num+1)}>
            点击num
        </div>
        </div>)
} 
export default Left;