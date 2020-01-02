import React from 'react'
import { StyledCard, StyledTitleCard, StyledCardSubItem, StyledCardSubItemText, StyledAddIcon } from './styles'
import PropTypes from 'prop-types'
import check from '../../../../assets/ico_check_on_2x.png'
import { useLoadImages } from '../../../Hooks'
import letterIcon from '../../../../assets/ico_mail_on_2x.png'

export const ItemCard = (props) => {
  let iconDefault
  if (props.type === 'letter') {
    iconDefault = letterIcon
  }
  const [icon] = useLoadImages(props.icon)

  return (
    <StyledCard type={props.type}>
      <img src={icon || iconDefault} alt='icon' />
      <StyledTitleCard>{props.title}</StyledTitleCard>
      {
        props.sectionsText.map((info, i) =>
          <div>
            <StyledCardSubItem>{props.cardItemName[i]}</StyledCardSubItem>
            <StyledCardSubItemText>{info}</StyledCardSubItemText>
          </div>
        )
      }
      {
        props.type === 'added' && <StyledAddIcon><img src={check} alt='checkIcon' /></StyledAddIcon>
      }
    </StyledCard>
  )
}

export const ItemCardDone = props => (
  <ItemCard {...props} done />
)

ItemCard.propTypes = {
  cardItemName: PropTypes.string, // el nombre de la subcategoria de la informacion de la card
  type: PropTypes.string, // el tipo de card itemp que sea
  icon: PropTypes.string.isRequired, // el path del icono a mostrar en cada card
  title: PropTypes.string, // el nombre del item del card
  sectionsText: PropTypes.array // el array con la info a mostrar en el card
}

ItemCard.defaultProps = {
  title: '',
  cardItemName: '',
  type: '',
  icon: '',
  sectionsText: []
}
