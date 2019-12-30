import React from 'react'
import { StyledTitle, StyledSubtitle } from './styles'

export const Title = ({ children }) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export const Subtitle = ({children}) => (
  <StyledSubtitle>
    {children}
  </StyledSubtitle>
)
