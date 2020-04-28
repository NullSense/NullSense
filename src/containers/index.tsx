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
  margin: 8em;
  width: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
