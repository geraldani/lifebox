import React, { useEffect, useState } from 'react'
import { StyledCard, StyledTitle } from './styles'
import PropTypes from 'prop-types'
import check from '../../../../assets/ico_check_on_2x.png'

const loadImage = (imageName, setIcon) => {
  // const images = require.context('../../../../assets', true)
  // const icon = images('./' + props.icon).default
  import(`../../../../assets/${imageName}`).then(image => {
    setIcon(image.default)
  })
}

export const ItemCard = (props) => {
  const [icon, setIcon] = useState('')
  useEffect(() => {
    loadImage(props.icon, setIcon)
  }, [])

  return (
    <StyledCard done={props.done}>
      <img src={icon} alt='icon' />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      <h6>{props.status}</h6>
      {
        props.done &&
        <div>
          <div><img src={check} alt='checkIcon' /></div>
        </div>
      }
    </StyledCard>
  )
}

export const ItemCardDone = props => (
  <ItemCard {...props} done />
)

ItemCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  icon: PropTypes.string,
  done: PropTypes.bool
}

ItemCard.defaultProps = {
  title: '',
  description: '',
  status: '',
  icon: '',
  done: false
}

ItemCardDone.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  icon: PropTypes.string
}

ItemCardDone.defaultProps = {
  title: '',
  description: '',
  status: '',
  icon: ''
}
