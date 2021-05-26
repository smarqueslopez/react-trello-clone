import styled from 'styled-components'
import Navbar from './Navbar'
import Board from './Board'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f6f7fb;
`

function Container() {
  return (
    <Wrapper>
      <Navbar />
      <Board />
    </Wrapper>
  )
}

export default Container
