import React, { useState,useEffect } from "react";
import {Input} from 'antd'

interface Fnums {
    checkoutNum:(num:number,type?:string)=>void;
    fnums:number | undefined
    }
function Fnum ({checkoutNum,fnums}:Fnums) {
    const [fnum,setFnum] = useState<number | undefined>(fnums)
    function changeFnum(v:any){
        setFnum(v)
        checkoutNum(v,'fnum')
    }
    useEffect(()=>{
        setFnum(fnums)
    },[fnums])
    return (
        <div style={{marginTop:24}}>
             <Input value={fnum} onChange={(e)=>changeFnum(e.target.value)}/>
            Fnum
        </div>
    )
}

export default Fnum;