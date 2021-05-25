import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f6f7fb;
`

function Container() {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

export default Container
