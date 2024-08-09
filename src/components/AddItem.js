import React from 'react'

const AddItem = ({item,index,deleteItem}) => {
  const handle=()=>{
    deleteItem(index)
  }
  return (
    <div>
      <div style={{display:"flex",gap:"20px",marginLeft:"25em",border:"2px black solid",width:"700px",paddingLeft:"50px"}}>
        <div><h1> {index+1}</h1></div>
        <div style={{width:"500px",textWrap:"wrap"}}><h1>{item}</h1></div>
        <div style={{margin:"2rem"}}><button onClick={handle}>Del</button></div>
      </div>
    </div>
  )
}

export default AddItem