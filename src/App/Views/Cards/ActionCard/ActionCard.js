import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle, StyledParagraph, StyledContainer, StyledButtonAdd } from './styles'
import { MdAdd as IconAdd } from 'react-icons/md'

export const ActionCard = ({ text, title }) => {
  return (
    <StyledContainer>
      <StyledButtonAdd>
        <IconAdd />
      </StyledButtonAdd>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{text}</StyledParagraph>
    </StyledContainer>
  )
}

ActionCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

ActionCard.defaultProps = {
  title: '',
  text: ''
}
