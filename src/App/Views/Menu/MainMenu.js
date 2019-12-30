import React, { useState } from 'react'
import { StyledContainer, StyledBackButton, StyledLogo, StyledIconsContainer, StyledIcon } from './styles'
import { menu } from '../../../data'
import arrow from '../../../assets/ico_flechadere_on_2x.png'
import logo from '../../../assets/Logo/ISO.png'
import PropTypes from 'prop-types'
import { useLoadImages } from '../../Hooks'

const IconMenu = ({ name, icon }) => {
  const [iconURL] = useLoadImages(icon)
  return (
    <StyledIcon>
      <img src={iconURL} alt='logo' />
    </StyledIcon>
  )
}

export const Menu = props => {
  // const [drop, setDrop] = useState(false)
  return (
    <StyledContainer>

      <StyledBackButton>
        <img src={arrow} alt='arrowEnter' />
      </StyledBackButton>

      <StyledLogo src={logo} alt='logo' />

      <StyledIconsContainer>
        {
          menu.map(bar => <IconMenu key={bar.name} {...bar} />)
        }
      </StyledIconsContainer>
    </StyledContainer>
  )
}

Menu.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
}

Menu.defaultProps = {
  name: '',
  icon: ''
}
