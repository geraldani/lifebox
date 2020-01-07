import React from 'react'
import { photographyData } from '../../../../data'
import { Subtitle, Title } from '../../Title'
import { SectionCard } from '../Welcome/Sections'

export const Photos = () => {
  const { title, subtitle, sectionCards } = photographyData
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
