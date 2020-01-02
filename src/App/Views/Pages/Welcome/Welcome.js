import React from 'react'
import { Title, Subtitle } from '../../Title'
import { ActionCard } from '../../Cards/ActionCard'
import { inicioData } from '../../../../data'
import { SectionCard } from './Sections'

export const Welcome = () => {
  const { title, subtitle, cards, titleSection1, titleSection2, cardsSection1, cardsSection2 } = inicioData
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <div className='d-flex'>
        {cards.map(e => <ActionCard key={e.title} {...e} />)}
      </div>

      <SectionCard title={titleSection1} cards={cardsSection1} />
      <SectionCard title={titleSection2} cards={cardsSection2} done />
    </div>
  )
}
