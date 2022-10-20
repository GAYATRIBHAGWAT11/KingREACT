import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '/Users/admin/React/my-app/src/NewsApp/Navbar.css'

export default function Navbar() {

  return (
    <nav className="nav">
      <div className="subNav">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdD0qV5x1R6Z5pXeS3-W9Xgq5nCnk_SmDhQ&usqp=CAU" alt="" className="logo" />
          <p className="head">𝐆𝐍𝐞𝐰𝐬</p>
        </div>
        <ul>
          <li><CustomLink className='text' to="/">Home</CustomLink></li>
          <li><CustomLink className='text' to="/Headline">Headline</CustomLink></li>
          <li><CustomLink className='text' to="/About">About</CustomLink></li>
          <li><CustomLink className='text' to="/Contact">Contact</CustomLink></li>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}