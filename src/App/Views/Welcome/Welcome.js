import React, { useState } from 'react'
import { Title, Subtitle } from '../Title'
import { StyledRectangle, MainContainer } from './styles'
import { ActionCard } from '../Cards/ActionCard'
import { welcomeData } from '../../../data'
import { SectionCard } from './Sections'
import { Menu } from '../Menu'

export const Welcome = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const toggleMenu = () => setOpenedMenu(!openedMenu)
  const { title, subtitle, cards, titleSection1, titleSection2, cardsSection1, cardsSection2 } = welcomeData

  return (
    <MainContainer open={openedMenu}>
      <Menu openCloseMenu={toggleMenu} openedMenu={openedMenu} />
      <StyledRectangle open={openedMenu}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <div className='d-flex'>
          {cards.map(e => <ActionCard key={e.title} {...e} />)}
        </div>

        <SectionCard title={titleSection1} cards={cardsSection1} />
        <SectionCard title={titleSection2} cards={cardsSection2} done />
      </StyledRectangle>
    </MainContainer>

  )
}

