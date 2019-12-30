import React from 'react'
import { TitleSection } from '../../Title'
import { ItemCard, ItemCardDone } from '../../Cards/ItemCard'
import PropTypes from 'prop-types'

export const SectionCard = (props) => {
  const Card = props.done ? ItemCardDone : ItemCard
  return (
    <>
      <TitleSection>{props.title}</TitleSection>
      <div className='d-flex'>
        {props.cards.map(e => <Card key={e.title} {...e} />)}
      </div>
    </>
  )
}

SectionCard.propTypes = {
  done: PropTypes.bool,
  title: PropTypes.string,
  cards: PropTypes.array
}

SectionCard.defaultProps = {
  done: false,
  title: '',
  cards: []
}
