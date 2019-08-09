import React from 'react'

export default function ShowallPosts(props) {
    console.log(props)
    return (
       <div>
           {props.all.map((item,index)=>{
               return (
                <div className="container alert-dark" key={index}>
                    {item.editmode?(<div><h2 className="text-center text-bold bg-success">
                    {item.title}
                    <button onClick={()=>props.save(index,item)} className="float-right deletebtn">save</button></h2>
                    {item.file?(<img src={item.file} className="rounded mx-auto d-block" width="300" alt="myimage"/>):""}
                    <textarea className="lead text-center p-2">{item.content}</textarea>
                <hr/></div>):(<div><h2 className="text-center text-bold bg-success">
                    {item.title}
                    <button onClick={()=>props.delete(index)} className="float-right deletebtn">X</button>
                    <button onClick={()=>props.edit(index)} className="float-right deletebtn">edit</button></h2>
                <details> 
                <summary>Read full article ,click here</summary>
                    {item.file?(<img src={item.file} className="rounded mx-auto d-block" width="300" alt="myimage"/>):""}
                    <p className="lead text-center p-2">{item.content}</p>
                </details>
                <hr/></div>)}
                <p className="p-2 m-2">{item.username} Wrote at: {item.time}</p>
              </div>
               )
           })}
       </div>
    )
}
