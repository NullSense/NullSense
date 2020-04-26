import React from 'react'
import styled from 'styled-components'

interface MenuItemProps {
  title: string
  link: string
}

const ListItem = styled.li`
  margin: 0 0 1em 0;
`

const Link = styled.a`
  color: white;
  font-size: 6vh;
  margin: 0 0 33em 0;
  height: 33em;
  text-decoration: none;

  &:hover {
    text-decoration: underline white solid 4px;
  }
`

export default (props: MenuItemProps) => {
  const { title, link } = props
  return (
    <ListItem>
      <Link href={link}>{title}</Link>
    </ListItem>
  )
}
