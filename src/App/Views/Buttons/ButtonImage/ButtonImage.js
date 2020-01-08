import React from 'react'
import PropTypes from 'prop-types'
import { StyledIconContainer } from './styles'

export const ButtonImage = props => {
  console.info('las props ', props.className)
  return (
    <StyledIconContainer className={props.className}>
      <img src={props.iconPath} alt='icon' />
      {
        props.title && <span>{props.title}</span>
      }
    </StyledIconContainer>
  )
}

ButtonImage.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string
}

ButtonImage.defaultProps = {
  iconPath: '',
  title: ''
}
