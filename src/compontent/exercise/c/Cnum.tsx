import { Input } from "antd";
import React ,{useEffect, useState} from "react";
interface Cnums {
    checkoutNum:(num:number,type?:string)=>void;
    cnums:number | undefined
}

function Cnum ({checkoutNum,cnums}:Cnums) {
    const [cnum,setCnum] = useState<number | undefined>(cnums)
    function changeCnum(v:any){
        setCnum(v)
        checkoutNum(v,'cnum') 
    }
    useEffect(()=>{
        setCnum(cnums)
    },[cnums])
    return (
        <div>
            <Input value={cnum} onChange={(e)=>changeCnum(e.target.value)}/>

            Cnum
        </div>
    )
}

export default Cnum;