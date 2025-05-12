import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSiderbar = () => setSidebar(!sidebar)

  return (

    <div>
          <Container>
          <FaBars onClick={showSiderbar} style={{color: "black"}} />
          {sidebar && <Sidebar active={setSidebar} />}
        </Container>
    </div>
  )
}

export default Header