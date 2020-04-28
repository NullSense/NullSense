import * as React from "react";
import { graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
// Layout
import Layout from "../layout/index";

// Components
import Heading from "../components/Heading";
import Menu from "../components/Menu";

interface IndexPageProps {
  location: {
    pathname: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}

const Wrapper = styled.div`
  margin: 2em;
  width: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 320px) {
    margin: 2em;
  }
  @media (min-width: 576px) {
    margin: 4em;
  }
  @media (min-width: 768px) {
    margin: 5em;
  }
  @media (min-width: 992px) {
    margin: 7em;
  }
  @media (min-width: 1200px) {
    margin: 8em;
  }
`;

export default ({ data, location }: IndexPageProps) => {
  const { site } = data;
  return (
    <Layout location={location}>
      <GlobalStyles />
      <Wrapper>
        <Heading
          title={site.siteMetadata.title}
          subtitle={site.siteMetadata.description}
        />
        <Menu />
      </Wrapper>
      <ThemeProvider theme={theme}></ThemeProvider>
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
