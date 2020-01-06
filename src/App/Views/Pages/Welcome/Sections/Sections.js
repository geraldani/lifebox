import React from 'react'
import { TitleSection } from '../../../Title'
import { ItemCard } from '../../../Cards/ItemCard'
import { StyledCardsContainer, StyledOptions, StyledItem } from './styles'
import PropTypes from 'prop-types'
import { History, ROUTES } from '../../../../Components/constantes'
import { MdSort as IconList } from 'react-icons/md' // MdSubject, MdSort , MdDialpad
import { TiThLarge as IconSquares } from 'react-icons/ti'
//
const ModeSee = () => {
  const info = [
    {
      title: 'Ver tarjetas',
      icon: IconSquares
    },
    {
      title: 'Ver en lista',
      icon: IconList
    }
  ]

  return (
    <StyledOptions>
      {
        info.map((e, i) => {
          const Icon = e.icon
          return <StyledItem key={e.title} active={i === 0}><Icon />{e.title}</StyledItem>
        })
      }
    </StyledOptions>
  )
}

export const SectionCard = (props) => {
  const { pathname } = History.location
  const commonProps = {
    cardItemName: props.sections,
    type: props.type
  }

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <TitleSection>{props.title}</TitleSection>
        {
          pathname !== ROUTES.start && pathname !== ROUTES.home && <ModeSee />
        }
      </div>
      <StyledCardsContainer>
        {props.cards.map(e => <ItemCard key={e.title} {...e} {...commonProps} />)}
      </StyledCardsContainer>
    </div>
  )
}

SectionCard.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  sections: PropTypes.array
}

SectionCard.defaultProps = {
  title: '',
  cards: [],
  sections: []
}
