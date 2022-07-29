import React, { useEffect, useState } from "react";
import axios from "axios";

type dataTask ={
    title?:string;
}[]

const api = 'https://cnodejs.org'
function Axios(){
    const [data,setData] = useState<dataTask>();
    console.log('commit-diyici')
    console.log('qcommit-dierci')
console.log('2111111111')
    function getList(){
        axios.request({
            url:`${api}/api/v1/topics`,
            method:'get',
            params:{
                page:1,
                tab:'ask',
                limit:10,
                mdrender:true
            }
        }).then(res=>{
            console.log('res',res)
            setData(res.data.data)
        })
    }
    useEffect(()=>{
        getList()
    },[])
    return(
        <div >
            <div>
            请求
            </div>
            <div>
                {
                  data?.map((it,index)=><div key={index}>
                      {it?.title}
                  </div>)  
                }
            </div>
        </div>
    )
}

export default Axios ;