import React, { useState } from 'react'
import { GenericModal } from '../Views/Modal/Generic'
import Modal from '../Views/Modal/Generic/GenericModal'
import ModalHooks from '../Views/Modal/Generic/ModalWithHooks'

const App = () => {
  const [visible, setVisible] = useState(false)
  const show = () =>  setVisible(true)
  const hide = () => setVisible(false)
  console.log('visible:: ', visible)

    return (
      <div>
        <button onClick={show}>show</button>
        {
          [...Array(50)].map(()=> <p>Estos es una prueba</p>)
        }
        <ModalHooks visible={visible} onClose={hide} onShow={show} animation='slideDown' closeOnEsc={true}>
          <div>Content</div>
        </ModalHooks>
      </div>
    )
}

export default App

/*
const App = () => {
  const [showModal, setShowModal] = useState(true)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div>
      <button onClick={openModal}>Mostrar modal</button>
      <GenericModal
        show={showModal}
        onClose={closeModal}
      >
        <h3>Hola enfermera</h3>
      </GenericModal>
      {
        [...Array(50)].map(()=> <p>Estos es una prueba</p>)
      }

    </div>
  )
}
*/

