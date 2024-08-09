import React, { useState } from 'react'
import AddItem from './AddItem';
// import DeleteItem from './DeleteItem';

const TodoList = () => {
   const [item,setItem]=useState('');
   const [items,setItems]=useState([]);
   const [addI,setAddI]=useState(false);
   const handleAdd=(e)=>{
    setItem(e.target.value);
    
   }
   const add=()=>{
    setItems([...items,item])
    setAddI(true)
    setItem('');
   }
   const deleteItem=(index)=>{
    const newItem=items.filter((_,i)=>i!==index);
    setItems(newItem);

   }
  return (
    <div>
      <h1>Welcome TO TODO List</h1>
      <label htmlFor="text">You Want to add item to the list ..?</label>
      <input type="text" placeholder='enter the item' value={item} onChange={handleAdd}/>
      <button onClick={add}>Add</button>
      <div style={{display:"flex",gap:"20px",marginLeft:"25em",border:"2px black solid",width:"700px",paddingLeft:"50px",marginTop:"40px"}}>
        <div><h1>Items</h1></div>
        <div style={{width:"400px",textWrap:"wrap"}}><h1>Describtion</h1></div>
        <div><h1>delete</h1></div>
      </div>
      {(addI)?
      (items.map((todo,i)=>(
      <AddItem item={todo} key={i} index={i} deleteItem={deleteItem}/>
      ))):
       " " }
      {/* <DeleteItem/> */}
    </div>
  )
}

export default TodoList