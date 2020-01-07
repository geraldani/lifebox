import React from 'react'
import { Title, TitleSection } from '../../Title'
import { healthData } from '../../../../data'
import { useLoadImages } from '../../../Hooks'
import { StyledCardMainInfo } from './styles'

const HeatlCardMainInfo = ({ name, value, icon }) => {
  const [iconPath] = useLoadImages(icon)
  return (
    <StyledCardMainInfo>
      <img src={iconPath} alt='icon' />
      <p>{name}</p>
      <span>{value}</span>
    </StyledCardMainInfo>

  )
}

export const Health = () => {
  const { title, subtitle, mainInfo } = healthData
  return (
    <div>
      <Title>{title}</Title>
      <TitleSection>{subtitle}</TitleSection>
      <div className='d-flex mt-4'>
        {
          mainInfo.map(info => <HeatlCardMainInfo key={info.name} {...info} />)
        }
      </div>
    </div>
  )
}
