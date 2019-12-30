import React from 'react'
import { Title, Subtitle, TitleSection } from '../Title'
import { StyledRectangle, MainContainer } from './styles'
import { ActionCard } from '../Cards/ActionCard'
import { welcomeData } from '../../../data'
import { ItemCard, ItemCardDone } from '../Cards/ItemCard'

export const Welcome = () => {
  const { title, subtitle, cards, titleSection1, titleSection2, cardsSection1, cardsSection2 } = welcomeData
  return (
    <MainContainer>
      <StyledRectangle>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <div className='d-flex'>
          {cards.map(e => <ActionCard key={e.title} {...e} />)}
        </div>

        <TitleSection>{titleSection1}</TitleSection>
        <div className='d-flex'>
          {cardsSection1.map(e => <ItemCard key={e.title} {...e} />)}
        </div>

        <TitleSection>{titleSection2}</TitleSection>
        <div className='d-flex'>
          {cardsSection2.map(e => <ItemCardDone key={e.title} {...e} />)}
        </div>
      </StyledRectangle>
    </MainContainer>

  )
}

Welcome.propTypes = {}
