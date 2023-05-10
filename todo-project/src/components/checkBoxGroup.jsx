import React from 'react';
import {BsTrash3} from 'react-icons/bs'
import { useState } from 'react';
const CheckBoxGroup = ({data,DeleteData,setCheckedList,checkedList,filterList}) => {
    const [isChecked, setIsChecked] = useState(false)
    // const [checkedList, setCheckedList] = useState([]);
    console.log(isChecked)
    const checkedItemHandler = (value, isChecked) => {
        if (isChecked) {
          setCheckedList((prev) => [...prev, value]);
          return;
        }
    
        if (!isChecked && checkedList.includes(value)) {
          setCheckedList(checkedList.filter((item) => item !== value));
          return;
        }
    
    return;
    };
    
      const checkHandler = (e, value) => {
        setIsChecked(!isChecked);
        checkedItemHandler(value, e.target.checked);
      };
      

      let hide = null

    return (
        <div>
              {data.map((v)=>{
                    if (filterList==='done'&&checkedList.includes(v)){
                        hide= 'hidden'
                    } else if(filterList==='NotDone'&&(checkedList.includes(v)===false)){
                         hide= 'hidden'
                    } else{
                         hide= null
                    }

                    return (
                        <div key={v.id} className={`flex justify-between ${hide}`}>
                            <div>
                                <input type="checkbox" id={v.id} 
                                checked={checkedList.includes(v)}
                                onChange={(e) => checkHandler(e, v)}

                                />
                                <label htmlFor={v.id} style={checkedList.includes(v) ? { textDecoration: 'line-through' } : {}}>{v.contents}</label>
                            </div>
                            <BsTrash3 onClick={()=>{DeleteData(v.id); }}></BsTrash3>
                        </div>
                    )
                })}
        </div>
    );
};

export default CheckBoxGroup;