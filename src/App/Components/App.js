import React, { useState } from 'react'
import { Modal } from '../Views/Modal/Generic'
import { GlobalStyles } from '../../Styles/GlobalStyles'
import { Welcome } from '../Views/Welcome'

const App = () => {
  /* const [visible, setVisible] = useState(false)
   const show = () => setVisible(true)
   const hide = () => setVisible(false)*/

  return (
    <>
      <GlobalStyles />
      <Welcome />
    </>
  )
}

export default App
