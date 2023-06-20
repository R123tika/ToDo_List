import React,{useState} from "react";
import List from "./List";

 function App(){
  const state =useState();
  const[prev,curr]=useState();
  const[prevclick,currclick]=useState([]);
  function write(event){
    curr(event.target.value)
  }
  function click(){
    currclick((pre)=>{
      return([...pre,prev])
      
    }) 
    curr('')
  }
  function remove(id){
    currclick((olditem)=>{
      return(olditem.filter((item,index)=>{
        return index !== id;
      }))
    })
  }

  return(
    <>
      <div className="main">
        <div className="center">
        <h1>ToDo List</h1>
          <input type='text' placeholder ='Add a Items'
            value={prev}
            onChange={write}
          />
          <span>
            <button onClick={click}>+</button>
          </span>
          <ol>
            {
              prevclick.map((arr,index)=>{
               return( 
                <List
                  value ={arr}
                  key={index}
                  id={index}
                  change ={remove}

               />)
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App