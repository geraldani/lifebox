import React, { useState } from 'react'
import { Title, TitleSection } from '../../Title'
import { healthData } from '../../../../data'
import { useLoadImages } from '../../../Hooks'
import {
  StyledCardMainInfo,
  StyledCardHealth,
  StyledCardHeader,
  StyledCardBody,
  StyledButtonImage,
  StyledNewArticle
} from './styles'

const HeatlCardMainInfo = ({ name, value, icon }) => {
  const [iconPath] = useLoadImages(icon)
  const [editable, setEditable] = useState(false)
  const [valueShow, setValueShow] = useState(value)

  const editText = () => {
    if (!editable) setEditable(true)
    if (editable) setEditable(false)
  }

  const handleChange = e => {
    const Value = e.target.value
    setValueShow(Value)
  }

  const handleEnter = e => {
    const code = e.keyCode || e.charCode
    if (code === 13) {
      e.preventDefault()
      editText()
    }
  }

  return (
    <StyledCardMainInfo>
      <img src={iconPath} alt='icon' />
      <p>{name}</p>
      <div onDoubleClick={editText} onBlur={editText}>
        {
          editable
            ? <input type='text' autoFocus defaultValue={value} value={valueShow} onChange={handleChange} onKeyUp={handleEnter} placeholder='Añade' />
            : <h5>{valueShow || <span>Añade</span>}</h5>
        }
      </div>
    </StyledCardMainInfo>

  )
}

const CardInfo = (props) => {
  const [iconPath] = useLoadImages(props.icon)
  const { title, subtitle, info } = props
  return (
    <div className='col-6 pl-0'>
      <StyledCardHealth className='mr-2'>
        <StyledButtonImage iconPath={iconPath} />
        <StyledCardHeader>
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </StyledCardHeader>
        <StyledCardBody>
          {
            info.map(e => {
              if (typeof e === 'string') return <div key={e}><p>{e}</p></div>
              return (
                <div key={e.name}>
                  <p>{e.name}</p>
                  <p>
                    {e.niw && <StyledNewArticle>Nuevo</StyledNewArticle>}
                    {e.value}
                  </p>
                </div>
              )
            })
          }
        </StyledCardBody>
      </StyledCardHealth>
    </div>
  )
}

export const Health = () => {
  const { title, subtitle, mainInfo, cards } = healthData
  return (
    <div>
      <Title>{title}</Title>
      <TitleSection>{subtitle}</TitleSection>
      <div className='d-flex mt-4'>
        {
          mainInfo.map(info => <HeatlCardMainInfo key={info.name} {...info} />)
        }
      </div>
      <div className='row mx-0 mt-5'>
        {
          cards.map(card => <CardInfo {...card} key={card.title} />)
        }
      </div>
    </div>
  )
}
