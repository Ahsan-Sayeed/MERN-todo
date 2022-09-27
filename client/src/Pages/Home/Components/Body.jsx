import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Documents from './Documents';

function Body() {
    const [todos,setTodos] = useState([]);
    
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

//Post
    const handleSubmit = (e) =>{
      e.preventDefault();
        console.log(title);
        console.log(desc);
      
        fetch('http://localhost:4000', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              desc: desc,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
       setTitle('');
       setDesc('');
  }

//Get
    useEffect(()=>{
      fetch('http://localhost:4000')
      .then((res)=>{
          return res.json();
      })
      .then((data)=>{
          setTodos(data);
      });
  },[todos]);

//Delete
const deleteMethod = (value) =>{
setTodos(todos.filter(items=>items._id!==value));

fetch('http://localhost:4000', {
         method: 'DELETE',
         body: JSON.stringify({
         _id:value
         }),
         headers: {
         'Content-type': 'application/json; charset=UTF-8',
         },
     })
}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br />
            <input type="text" name="desc" id="desc" placeholder="Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/><br />
            <button type="submit">Submit</button>
        </form>

        <div>
            { todos.map((value,index)=>{
                 return <Documents key={index} title={value.title} desc={value.desc} id={value._id} deleteMethod={deleteMethod} />;
            })}
        </div>
     
      </div>
    </>
  )
}

export default Body;