import React from 'react'
import {
  StyledCard,
  StyledTitleCard,
  StyledCardSubItem,
  StyledCardSubItemText,
  StyledCheckIcon
} from './styles'
import PropTypes from 'prop-types'
import check from '../../../../assets/ico_check_on_2x.png'
import { useLoadImages } from '../../../Hooks'
import letterIcon from '../../../../assets/ico_mail_on_2x.png'
import photoIcon from '../../../../assets/ico_imagen_on_2x.png'
import addIcon from '../../../../assets/ico_mas_on_2x.png'
import { ButtonImage } from '../../Buttons/ButtonImage'

export const ItemCard = (props) => {
  let icon
  switch (props.type) {
    case 'letter':
      icon = letterIcon
      break
    case 'photo':
      icon = photoIcon
      break
    case 'addImage':
      icon = addIcon
      break
    default:
      icon = useLoadImages(props.icon)
  }

  return (
    <StyledCard type={props.type}>
      {
        props.type === 'addImage'
          ? <ButtonImage title='Nuevo album' iconPath={icon} />
          : <img src={icon} alt='icon' />
      }

      <StyledTitleCard>{props.title}</StyledTitleCard>
      {
        props.sectionTitle.map((info, i) =>
          <div>
            <StyledCardSubItem>{info}</StyledCardSubItem>
            <StyledCardSubItemText>{props.sectionsText[i]}</StyledCardSubItemText>
          </div>
        )
      }
      {
        props.type === 'added' && <StyledCheckIcon><img src={check} alt='checkIcon' /></StyledCheckIcon>
      }
    </StyledCard>
  )
}

ItemCard.propTypes = {
  cardItemName: PropTypes.string, // el nombre de la subcategoria de la informacion de la card
  type: PropTypes.string, // el tipo de card itemp que sea
  icon: PropTypes.string.isRequired, // el path del icono a mostrar en cada card
  title: PropTypes.string, // el nombre del item del card
  sectionsText: PropTypes.array, // el array con la info a mostrar en el card
  sectionTitle: PropTypes.array // el array con el titulo de la info a mostrar
}

ItemCard.defaultProps = {
  title: '',
  cardItemName: '',
  type: '',
  icon: '',
  sectionsText: [],
  sectionTitle: []
}
