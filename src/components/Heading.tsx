import React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  title: string
  subtitle: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`

const Title = styled.h1`
  font-size: 20vh;
  font-weight: 400;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 100;
  margin-top: 3em;
`

export default (props: IHeadingProps) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
