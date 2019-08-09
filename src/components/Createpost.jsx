import React, { Component } from 'react'

export default class Createpost extends Component {
    render() {
        return (
            <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">UserName :</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="UserName"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title :</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Title"/>
              </div>
            </div> <div className="form-group row">
              <label className="col-sm-2 col-form-label">Content :</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="POST"/>
              </div>
            </div>
            <button type="button" class="btn btn-success">Create a Post</button>
          </form>
        )
    }
}
