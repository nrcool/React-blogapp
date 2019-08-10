import React, { Component } from 'react'

export default class Createpost extends Component {

  render() {
    return (
      <form onSubmit={this.props.submitform} >
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" >UserName :</label>
          <div className="col-sm-10">
            <input type="text" required={true } className="form-control" placeholder="UserName" value={this.props.username} onChange={this.props.getusername} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Title :</label>
          <div className="col-sm-10">
            <input type="text" required={true } className="form-control" placeholder="Title" value={this.props.title} onChange={this.props.gettitle} />
          </div>
        </div> 
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Content :</label>
          <div className="col-sm-10">
            <input type="text" required={true } className="form-control" placeholder="POST" value={this.props.content} onChange={this.props.getcontent} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">upload image :</label>
          <div className="col-sm-10">
            <input type="file" className="form-control" placeholder="image" onChange={this.props.uploadimage} />
          </div>
        </div>
        <button type="submit" className="btn btn-success">Create a Post</button>
      </form>
    )
  }
}
