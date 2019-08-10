import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash, faSave } from "@fortawesome/free-solid-svg-icons"

export default class ShowallPosts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemvalue:""
        }
    }
    handlevalue=(e)=>{
        this.setState({
            itemvalue:e.target.value
        })
    }
    render(){
    console.log(this.props)
    return (
       <div>
           {this.props.all.map((item,index)=>{
               return (
                <div className="container alert-dark" key={index}>
                    {item.editmode?(<div><h2 className="text-center text-bold bg-success">
                    {item.title}
                    <button onClick={()=>this.props.save(index,this.state.itemvalue)} className="float-right btn btn-success"><FontAwesomeIcon icon={faSave} /></button></h2>
                    {item.file?(<img src={item.file} className="rounded mx-auto d-block" width="300" alt="myimage"/>):""}
                    <textarea className="lead text-center p-2" onChange={this.handlevalue} value={this.state.itemvalue}>{item.content}</textarea>
                <hr/></div>):(<div><h2 className="text-center text-bold bg-success">
                    {item.title}
                    <button onClick={()=>this.props.delete(index)} className="float-right btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                    <button onClick={()=>this.props.edit(index)} className="float-right btn btn-primary"><FontAwesomeIcon icon={faEdit} /></button></h2>
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
}