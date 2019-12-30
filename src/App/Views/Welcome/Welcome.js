import React from 'react'
import { Title, Subtitle } from '../Title'
import { StyledRectangle } from './styles'

export const Welcome = props => {
  return (
    <StyledRectangle>
      <Title>¡Bienvenido!</Title>
      <Subtitle>Aquí encontrarás una vista previa de la información que cargues a lo largo del tiempo</Subtitle>
    </StyledRectangle>
  )
}

Welcome.propTypes = {}
