import React from 'react';
import { useState } from 'react';

function Documents({title,desc,id,deleteMethod}) {
  const [isUpdate,setIsUpdate] = useState('');
  const [isEdit,setIsEdit] = useState(true);

  const [isTitle,setIsTitle] = useState(title);
  const [isDesc,setIsDesc] = useState(desc);


const updateData = () =>{
  setIsEdit(!isEdit);

if(!isEdit){
  fetch('http://localhost:4000', {
    method: 'PUT',
    body: JSON.stringify({
      _id: id,
      title: isTitle,
      desc: isDesc,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}
  

}


const getTitle=(v)=>{
  setIsTitle(v);
}
const getDesc = (v) =>{
  setIsDesc(v);
}

  return (
    <div>
        <hr />
        <h3>{isEdit?title:<InputField value={title} myFun={getTitle}/>}</h3>
        <p>{isEdit?desc:<InputField value={desc} myFun={getDesc}/>}</p><hr />
        <button onClick={()=>{deleteMethod(id)}}>delete</button>
        <button onClick={updateData}>{isEdit?'Edit':'Update'}</button>
        <hr />
    </div>
  )
}

const InputField = ({value,myFun})=>{
  const [isvalue,setIsvalue] = useState(value);

  const handleChange = (e)=>{
    setIsvalue(e.target.value);
    myFun(e.target.value);
  }

  return(
    <>
    <form>
       <input type="text" value={isvalue} onChange={handleChange}/>
    </form>
    </>
  );
}

export default Documents;