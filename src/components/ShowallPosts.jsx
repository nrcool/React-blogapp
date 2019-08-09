import React from 'react'

export default function ShowallPosts() {
    return (
        <div className="jumbotron">
        <h2 className="text-center text-bold bg-success">Hello, world!</h2>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr/>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    )
}
