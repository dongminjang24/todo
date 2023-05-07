import React from 'react';
import '../src/App.css'
import { useState } from 'react';
import {ImSun} from 'react-icons/im'
import {BiMoon} from 'react-icons/bi'
import TODO_DATA from './components/data';
 const TodoWindow = () => {
    const [inputValue,setInputValue] = useState('')
    const [light,setLight] = useState(false)
    const [data,setData] = useState(TODO_DATA)
    console.log(inputValue)
    const bg_back = light===true  ? 'bg-color-bright-modal' : 'bg-color-modal'
    const bg_roundary = light===true  ? 'bg-color-roundary-bright-modal' : 'bg-roundary-modal'
    const AddData =(val)=>{
        const CopyData = [...data]
        CopyData.concat({id:CopyData.length+1,contents:val})
        console.log(CopyData)
       setData(CopyData)
    }
    return (
        <div className={`w-[24rem] h-[28rem] ${bg_back}  m-auto rounded-lg flex flex-col justify-between`}>
            <div className={`h-[5rem] w-full ${bg_roundary} rounded-t-lg`}>
                { light===true  ? <ImSun className='bg-white' onClick={()=>{setLight(!light)}}/>:<BiMoon className='bg-white' onClick={()=>{setLight(!light)}}/>}
            </div>
            <div>
                {data.map((v)=>{
                    return (
                        <div key={v.id}>
                            <input type="checkbox" id={v.id}  />
                            <label htmlFor={v.id} >{v.contents}</label> 
                        </div>
                    )
                })}
                
            </div>
            <div className={`h-[5rem] w-full ${bg_roundary} rounded-b-lg`}>
                <input type="text" onChange={(e)=>{setInputValue(e.target.value)}}/><Button onClick={()=>{AddData(inputValue)}}>ADD</Button>
            </div>
        </div>
    );
};

export default TodoWindow;

const Button = ()=>{
    return <button className=' bg-orange-400 rounded-md px-[15px] py-[5px] text-white font-bold'>Add</button>
}
