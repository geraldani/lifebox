import React from 'react'
import { TitleSection } from '../../../Title'
import { ItemCard } from '../../../Cards/ItemCard'
import { StyledCardsContainer } from './styles'
import PropTypes from 'prop-types'
import { History, ROUTES } from '../../../../Components/constantes'

const ModeSee = () => {
  return (
    <div>
      actions
    </div>
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
          pathname !== ROUTES.home && <ModeSee />
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
