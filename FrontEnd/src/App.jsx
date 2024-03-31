import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
import axios from 'axios'

function App() {
  const [input, setInput] = useState("");
  const [list,setList]=useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:3000/getUsers").then(result=>setList(result.data)).catch(e=>console.log(e)); setInput("");
  },[])

  function add()
  {


    if(input!==""){
    setList((prop)=>{return [...prop,{input:input}]})
    setInput("");
    axios.post("http://localhost:3000",{input}).then(result=>console.log(result)).catch(e=>console.log(e));
    }

    

  }

  function onDelete(index){
    setList((newList)=>{
     return newList.filter((props,id)=>{ return id!==index});
    });
  }

  return (
    <>
      <div className=' text-center'>
        <h1 className=' text-red-950'>To_DO_LIST</h1>
        <div className=' flex flex-left my-12'>
        <input onChange={(e)=>{setInput(e.target.value)}} className=" mx-6 block w-96 p-2 ps-10 text-lg  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="fname" name="fname"/>
        <button onClick={add} className=' h-12' >Add</button>
        </div>
        {list.map((prop,index)=><List text={prop.input} deleteId={prop._id} id={index} delete={onDelete} />)}
      </div>
      
    </>
  )
}

export default App
