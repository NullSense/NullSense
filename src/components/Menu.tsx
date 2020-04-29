import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";

const Menu = styled.ul`
  list-style-type: none;
  margin: 1em 1em;
  padding: 0;

  @media (min-width: 320px) {
    margin: 1em 1em;
  }
  @media (min-width: 576px) {
    margin: 1em 1.5em;
  }
  @media (min-width: 768px) {
    margin: 1em 2em;
  }
  @media (min-width: 992px) {
    margin: 1em 2em;
  }
  @media (min-width: 1200px) {
    margin: 2em 4em;
  }
`;

export default () => {
  return (
    <Menu>
      <MenuItem title="Home" to="/"></MenuItem>
      <MenuItem title="Blog" link="https://CuriosityOverflow.xyz"></MenuItem>
      <MenuItem title="Contact" to="/Contact"></MenuItem>
    </Menu>
  );
};
