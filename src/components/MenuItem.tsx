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

const StyledLink = styled((props) => <Link {...props} />)`
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

export default (props: MenuItemProps) => {
  const { title, link } = props;
  return (
    <ListItem>
      <StyledLink to={link}>{title}</StyledLink>
    </ListItem>
  );
};
