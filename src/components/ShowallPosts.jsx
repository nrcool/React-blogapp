import React from 'react'

export default function ShowallPosts(props) {
    console.log(props)
    return (
       <div>
           {props.all.map((item,index)=>{
               return (
                <div className="container alert-dark" key={index}>
                    <h2 className="text-center text-bold bg-success">{item.title}<button className="float-right deletebtn">X</button></h2>
                <details> 
                <summary>Read full article ,click here</summary>
                    {item.file?(<img src={item.file} className="rounded mx-auto d-block" width="300" alt="myimage"/>):""}
                    <p className="lead text-center p-2">{item.content}</p>
                </details>
                <hr/>
                <p className="p-2 m-2">{item.username} Wrote at: {item.time}</p>
              </div>
               )
           })}
       </div>
    )
}
