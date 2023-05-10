import React, { useEffect } from 'react';
import '../src/App.css'
import { useState } from 'react';
import {ImSun} from 'react-icons/im'
import {BiMoon} from 'react-icons/bi'
import CheckBoxGroup from './components/checkBoxGroup';
import TODO_DATA from './components/data';
 const TodoWindow = () => {
    const [inputValue,setInputValue] = useState('')
    const [light,setLight] = useState(false)
    const bg_back = light===true  ? 'bg-color-bright-modal' : 'bg-color-modal'
    const bg_roundary = light===true  ? 'bg-color-roundary-bright-modal' : 'bg-roundary-modal'
    const [data,setData] = useState(TODO_DATA)
    const DeleteData = (id)=>{
        const CopyData = [...data]
        let filtered = CopyData.filter(v => v.id !== id);
        setData(filtered)
    }
    const [checkedList, setCheckedList] = useState([]);

    // 체크했는지 안했는지 어떤 걸 체크했는지 콘솔로 찍어보기
    // const isChecked = (value) => data.includes(value);

    // const toggleValue = ({ checked, value }) => {
    //     if (checked) {
    //     onChange(values.concat(value));
    //     } else {
    //     onChange(values.filter((v) => v !== value));
    //     }
    // };
    // const filterData = (val)=>{
    //     const CopyData = [...data];
    //     const CopyDone = CopyData.filter((item) => checkedList.includes(item));
    //     const CopyNotDone = CopyData.filter((item) => !checkedList.includes(item));        
    //     if (val === 'all' ){
    //         setData(CopyData)
    //     }else if(val === 'done'){
    //         setData(CopyDone)
    //     }else{
    //         setData(CopyNotDone)
    //     }
    // }

    const [filterList,setFilterList ] = useState('all')
    useEffect(()=>{

       
    
    }
    
    ,[filterList])
    


    return (
        <div className={`w-[24rem] h-[28rem] ${bg_back}  m-auto rounded-lg flex flex-col justify-between`}>
            <div className={`h-[5rem] w-full ${bg_roundary} rounded-t-lg`}>
                { light===true  ? <ImSun className='bg-white' onClick={()=>{setLight(!light)}}/>:<BiMoon className='bg-white' onClick={()=>{setLight(!light)}}/>}
               <button className='text-white font-bold' onClick={()=>{setFilterList('all')}}>All</button>
               <button className='text-white font-bold' onClick={()=>{setFilterList('NotDone')}}>Active</button>
               <button className='text-white font-bold' onClick={()=>{setFilterList('done')}}>Completed</button>
            </div>
            <div>
              <CheckBoxGroup data={data} DeleteData={DeleteData} checkedList={checkedList} setCheckedList={setCheckedList} filterList={filterList}></CheckBoxGroup>
                
            </div>
            <div className={`h-[5rem] w-full ${bg_roundary} rounded-b-lg`}>
                <input type="text" onChange={(e)=>{setInputValue(e.target.value)}}/>
                <Button inputValue={inputValue} data={data} setData={setData}>ADD</Button>
            </div>
        </div>
    );
};

export default TodoWindow;

const Button = ({inputValue,data,setData})=>{
    const AddData =(val)=>{
        const CopyData = [...data]
        const maxObjArr = CopyData.reduce( (prev, value) => {
            return prev.id >= value.id ? prev : value
          });
        CopyData.push({id:maxObjArr.id +1,contents:val,done:false})
        console.log(CopyData)
       setData(CopyData)
    }
    return <button onClick={()=>{AddData(inputValue)}} className=' bg-orange-400 rounded-md px-[15px] py-[5px] text-white font-bold'>Add</button>
}
