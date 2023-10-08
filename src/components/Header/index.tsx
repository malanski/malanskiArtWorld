import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { HeaderStyle, NavStyle } from './style'
import { ReactNode } from 'react'

interface CustomLinkProps {
  children: ReactNode
  to: string
  title: string
}

function CustomLink({ children, to, ...props }: CustomLinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link className={match ? 'active' : ' '} to={to} {...props}>
      {children}
    </Link>
  )
}

export const Header = () => {
  return (
    <HeaderStyle>
      <CustomLink to="/" title="Home">
        <h1>MalanskiArt World</h1>
      </CustomLink>

      <NavStyle>
        <div>
          <CustomLink to="/clothes" title="Clothes">
            Clothes
          </CustomLink>
          <CustomLink to="/objects" title="Objects">
            Objects
          </CustomLink>
        </div>
      </NavStyle>
    </HeaderStyle>
  )
}
