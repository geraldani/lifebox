import React, {useEffect, useState} from 'react'
import { StyledCard } from './styles'
import PropTypes from 'prop-types'

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
    <StyledCard>
      <img src={icon} alt='icon' />
      {props.title}
    </StyledCard>
  )
}

export const ItemCardDone = props => (
  <StyledCard>
    {props.title}
  </StyledCard>
)

ItemCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  icon: PropTypes.string
}

ItemCard.defaultProps = {
  title: '',
  description: '',
  status: '',
  icon: ''
}

ItemCardDone.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string
}

ItemCardDone.defaultProps = {
  title: '',
  description: '',
  name: '',
  icon: ''
}
