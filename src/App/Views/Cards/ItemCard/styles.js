import styled, { css } from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../Styles/constantes'
import { Shadow } from '../../../../Styles/GlobalStyles'

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 220px;
  //width: 25%;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  margin-left: 20px;
  padding: 23px 16px 16px 16px;
  position: relative;
  transition: all 200ms;
  &:hover{
    ${Shadow}
  }
  img{
    width: 68px;
    display: block;
  }
  h5, h6, p{
    color: ${props => props.done ? COLORS.bg_secondary : COLORS.action_secondary};
    position: relative;
    z-index: 50;
  }
   
  h5{
    font-size: ${FONT_SIZE.card};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 30px;
    margin-top: 43px;
    margin-bottom: 6px;
  }
  
  p{
    line-height: 23px;
    font-size: ${FONT_SIZE.text};
    font-weight: ${FONT_WEIGHT.light};
  }
  
  h6{
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.medium};
    line-height: 27px;
    position: relative;
    padding-left: ${props => props.done ? '0' : '14px'};
    margin-top: -6px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${props => !props.done && css`
      &:before{
        content: '';
        width: 8px;
        height: 8px;
        background: ${COLORS.issue_primary};
        position: absolute;
        border-radius: 50%;
        top: 9px;
        left: 0;
      }
    `}
  }
  div{
    background: ${COLORS.violet_secondary};
    position:absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    border-radius: 0 0 8px 8px;
    z-index: 0;
    height: 111px;
    div{
      position: absolute;
      height: 26px;
      width: 26px;
      background: ${COLORS.violet_forth};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      top: 8px;
      right: 8px;
      img{
        width: 12px;
      }
    }
  }
  
`

export { StyledCard }
