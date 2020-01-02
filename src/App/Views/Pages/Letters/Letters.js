import React from 'react'
import { Subtitle, Title } from '../../Title'
import { lettersData } from '../../../../data'
import { SectionCard } from '../Welcome/Sections'

export const Letters = () => {
  const { title, subtitle, sectionCards } = lettersData
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {
        sectionCards.map((cards, actualItem) => <SectionCard key={cards.title} {...cards} actualItem={actualItem} />)
      }
    </div>
  )
}
