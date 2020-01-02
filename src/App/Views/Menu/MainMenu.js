import React from 'react'
import {
  StyledContainer,
  StyledOpenMenuButton,
  StyledLogo,
  StyledIconsContainer,
  StyledIcon,
  StyledIconContainer,
  StyledSessionUser,
  StyledUserInfo
} from './styles'
import { menu } from '../../../data'
import arrow from '../../../assets/ico_flechadere_on_3x.png'
import logoClosed from '../../../assets/Logo/ISO.png'
import logoOpened from '../../../assets/Logo/TexOscuro.png'
import PropTypes from 'prop-types'
import { useLoadImages } from '../../Hooks'
import { Avatar } from '../Avatar'

const IconMenu = ({ name, icon, open, link }) => {
  const [iconURL] = useLoadImages(icon)
  return (
    <StyledIconContainer to={link} open={open} activeClassName='active'>
      <div className='position-relative'>
        <StyledIcon open={open}>
          <img src={iconURL} alt='logo' />
        </StyledIcon>
        <p>{name}</p>
      </div>
    </StyledIconContainer>
  )
}

export const Menu = props => {
  const user = {
    name: 'Geraldyn Chirinos'
  }

  return (
    <StyledContainer open={props.openedMenu}>
      <div className='d-flex flex-column'>
        <StyledOpenMenuButton onClick={props.openCloseMenu}>
          <img src={arrow} alt='arrowEnter' />
        </StyledOpenMenuButton>

        <StyledLogo src={props.openedMenu ? logoOpened : logoClosed} alt='logo' />

        <StyledIconsContainer>
          {
            menu.map(bar => <IconMenu key={bar.name} {...bar} open={props.openedMenu} />)
          }
        </StyledIconsContainer>
      </div>

      <StyledSessionUser>
        <Avatar />
        <StyledUserInfo>
          <p>{user.name}</p>
          <button onClick={props.openCloseMenu}>Cerrar sesión</button>
        </StyledUserInfo>
      </StyledSessionUser>
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
