import React from "react";
import styled from "styled-components";

interface IHeadingProps {
  title: string;
  subtitle: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 10vw;
  font-weight: 400;
  margin: 0;

  &:before {
    content: "NullSense";
  }
  &:hover {
    animation: show 0.8s infinite;
  }
  @keyframes show {
    93% {
      color: white;
    }
    94% {
      color: white;
    }
    100% {
      color: white;
    }
  }
  &:hover:before {
    animation: texte 0.8s infinite;
  }
  @keyframes texte {
    0% {
      content: "4@,3SAscA";
    }
    10% {
      content: "$R6?4dSj{";
    }
    20% {
      content: "+BDs73f;[";
    }
    30% {
      content: "{qS<7Yh7+";
    }
    50% {
      content: "Ai;9,bT4$";
    }
    60% {
      content: "[o3^4LggA";
    }
    70% {
      content: "qoj4BWy-?";
    }
    80% {
      content: "GonQ5Tye4";
    }
    90% {
      content: "Go3d4<yec";
    }
    100% {
      content: "N0_#Se2sA";
    }
  }
`;

const Subtitle = styled.p`
  font-size: 3vw;
  font-weight: 100;
  margin-top: 0.5em;
`;

export default (props: IHeadingProps) => {
  const { title, subtitle } = props;
  return (
    <Wrapper>
      <Title></Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};
