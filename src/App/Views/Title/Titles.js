import React from 'react'
import { StyledTitle, StyledSubtitle, StyledTitleSection } from './styles'

export const Title = ({ children }) => (
  <StyledTitle>
    {children}
  </StyledTitle>
)

export const Subtitle = ({ children }) => (
  <StyledSubtitle>
    {children}
  </StyledSubtitle>
)

export const TitleSection = ({ children }) => (
  <StyledTitleSection>
    {children}
  </StyledTitleSection>
)
