import React, { useEffect, useState } from "react";
import { useSetState } from "ahooks";



function Midin(){
    const [info,setInfo] = useSetState<{name:string,age:number,sex:string}>({name:'zahngsan',age:12,sex:'nan'}) 
    const useMessage = function(start:any){
        const [data,setData] = useState(start)
        setData((data:any)=>({...data,start}))
        return [data,setData]
    }
    // const [nn,setNn] = useMessage({name:'aa',age:11,sex:'nan'})
    return (
        <div>
            <div  onClick={()=>{setInfo({name:'lisi'})}}>
                dainji
                
            </div>
            {
                Object.keys(info).map((it,index)=>(
                        <div key={index} >
                            {it}:{Object.values(info)[index]}
                        </div>
                )
                    
                
                    
                )
            }
            111111
            {/* {nn.name}
            {nn.age}
            {nn.sex} */}
            {/* {
                Object.keys(nn).map((it,index)=>(
                
                        <div key={index} >
                            {it}:{Object.values(nn)[index]}
                        </div>
                )
                    
                
                    
                )
            } */}
        </div>
    )
}


export default Midin;