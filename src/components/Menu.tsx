import React from 'react'
import styled from 'styled-components'

import MenuItem from './MenuItem'

const Menu = styled.ul`
  list-style-type: none;
  margin: 3em 3em;
  padding: 0;
`

export default () => {
  return (
    <Menu>
      <MenuItem title="Home" link="/"></MenuItem>
      <MenuItem title="Blog" link="https://CuriosityOverflow.xyz"></MenuItem>
    </Menu>
  )
}
