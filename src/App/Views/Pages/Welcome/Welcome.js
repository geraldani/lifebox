import React from 'react'
import { Title, Subtitle } from '../../Title'
import { ActionCard } from '../../Cards/ActionCard'
import { inicioData } from '../../../../data'
import { SectionCard } from './Sections'

export const Welcome = (pros) => {
  const { title, subtitle, cards, sectionCards } = inicioData
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <div className='d-flex'>
        {cards.map(e => <ActionCard key={e.title} {...e} />)}
      </div>
      {
        sectionCards.map(cards => <SectionCard key={cards.title} {...cards} />)
      }
    </div>
  )
}
