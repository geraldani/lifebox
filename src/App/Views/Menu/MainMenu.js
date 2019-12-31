import React from 'react'
import { StyledContainer, StyledOpenMenuButton, StyledLogo, StyledIconsContainer, StyledIcon } from './styles'
import { menu } from '../../../data'
import arrow from '../../../assets/ico_flechadere_on_3x.png'
import logoClosed from '../../../assets/Logo/ISO.png'
import logoOpened from '../../../assets/Logo/TexOscuro.png'
import PropTypes from 'prop-types'
import { useLoadImages } from '../../Hooks'
import { Avatar } from '../Avatar'

const IconMenu = ({ name, icon, active }) => {
  const [iconURL] = useLoadImages(icon)
  return (
    <StyledIcon active={active}>
      <img src={iconURL} alt='logo' />
      <span>{name}</span>
    </StyledIcon>
  )
}

export const Menu = props => {
  return (
    <StyledContainer open={props.openedMenu}>
      <div className='d-flex flex-column'>
        <StyledOpenMenuButton onClick={props.openCloseMenu}>
          <img src={arrow} alt='arrowEnter' />
        </StyledOpenMenuButton>

        <StyledLogo src={props.openedMenu ? logoOpened : logoClosed} alt='logo' />

        <StyledIconsContainer>
          {
            menu.map(bar => <IconMenu key={bar.name} {...bar} active={bar.name === 'Inicio'} />)
          }
        </StyledIconsContainer>
      </div>

      <Avatar />
    </StyledContainer>
  )
}

Menu.propTypes = {
  openCloseMenu: PropTypes.func.isRequired,
  openedMenu: PropTypes.bool
}

Menu.defaultProps = {
  openedMenu: false
}
