import styled from 'styled-components'

const Loading = styled.div`
  position: fixed;
  text-align: center;
  left: 50%;
  top: 50%;

  &:before {
    content: "";
    height: 100px;
    width: 100px;
    margin: -50px auto auto -50px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: rgba(255,255,255,1.0) rgba(255,255,255,0.5) rgba(255,255,255,0.5);
    border-radius: 100%;
    animation: rotation .7s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(359deg);
    }
  }
`

export default Loading;