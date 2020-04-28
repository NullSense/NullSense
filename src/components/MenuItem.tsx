import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface MenuItemProps {
  title: string;
  link: string;
}

const ListItem = styled.li`
  margin: 0 0 1em 0;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 6vw;
  margin: 0 0 33em 0;
  height: 33em;
  text-decoration: none;

  &:hover {
    text-decoration: underline white;
    text-decoration-thickness: 4px;
  }
`;

class MenuItem extends React.Component<MenuItemProps> {
  render() {
    return (
      <ListItem>
        <StyledLink to={this.props.link}>{this.props.title}</StyledLink>
      </ListItem>
    );
  }
}

export default MenuItem;
