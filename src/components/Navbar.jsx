import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">BLOG</Link>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createpost">Create New Post</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/showallposts">Show All Post</Link>
      </li>
    </ul>
</nav>
    )
}
