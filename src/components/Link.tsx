import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface ILinkProps {
  title: string
  link: string
}

const MenuItem = styled.li`
  font-size: 38px;
  font-weight: 100;
`

export default (props: ILinkProps) => {
  const { title, link } = props
  return (
    <MenuItem>
      <Link to={link}>{title}</Link>
    </MenuItem>
  )
}
