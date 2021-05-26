import styled from 'styled-components'

const Container = styled.div`
  height: calc(100vh - 80px - 8px - 8px);
  margin: 32px 64px;
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9b9b9b;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
`

function Board() {
  return <Container></Container>
}

export default Board
