import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  border: 0;
  background-color: rgb(200,0,0);
  color: white;
  padding: 10px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 100px;
  font-size: 24px;
  font-family: inherit;

  &:hover {
    background-color: rgb(220,0,0);
  }

  transition: transform 0.1s;
`

export const Score = styled.h2`
  font-size: 120px;
  margin: 0;
  position: absolute;
  top: 0px;
  right: 40px;
`

export const CountDownDigit = styled.h1`
  font-size: 220px;
  top: 20px;
`