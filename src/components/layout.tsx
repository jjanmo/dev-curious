import * as React from 'react'
import { Link } from 'gatsby'

interface Props {
  title?: string
  children: React.ReactNode
  location: Location
}

export default function Layout({ location, title, children }: Props) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const mainHeader = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  const linkHeader = (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{isRootPath ? mainHeader : linkHeader}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
