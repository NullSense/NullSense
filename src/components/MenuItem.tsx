import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface MenuItemProps {
  title: string;
  link: string; // For <a>
  to: string; // For Link
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

const StyledA = styled.a`
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
        {this.props.to ? (
          <StyledLink to={this.props.to}>{this.props.title}</StyledLink>
        ) : (
          <StyledA href={this.props.link}>{this.props.title}</StyledA>
        )}
      </ListItem>
    );
  }
}

export default MenuItem;
