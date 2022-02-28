import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
