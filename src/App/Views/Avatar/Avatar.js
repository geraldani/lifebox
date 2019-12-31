import React from 'react'
import { StyledAvatar } from './styles'
import PropTypes from 'prop-types'

const avatarDefault = 'http://1.bp.blogspot.com/-hj-YaYLHCmw/U-gpslrj_AI/AAAAAAAAAAY/wDLKetDm6AE/s1600/Avatar+Luis+Guillermo+Castilla.png'
export const Avatar = props => {
  return (
    <StyledAvatar>
      <img src={props.img} alt='avatar' />
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  img: PropTypes.string
}

Avatar.defaultProps = {
  img: avatarDefault
}
