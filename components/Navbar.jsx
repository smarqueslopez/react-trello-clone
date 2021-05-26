import { IconButton } from '@material-ui/core'
import styled from 'styled-components'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MenuIcon from '@material-ui/icons/Menu'

const Container = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(142, 142, 142, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(142, 142, 142, 0.25);
`

function Navbar() {
  return (
    <Container>
      <IconButton>
        <DashboardIcon style={{ color: '#c7cacc' }} fontSize='large' />
      </IconButton>
      <img src='./logo.svg' width='120px' alt='logo' />
      <IconButton>
        <MenuIcon style={{ color: '#c7cacc' }} fontSize='large' />
      </IconButton>
    </Container>
  )
}

export default Navbar
