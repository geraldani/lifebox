import styled, { css } from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../Styles/constantes'
import { Shadow } from '../../../Styles/GlobalStyles'
import { NavLink } from 'react-router-dom'

const paddingX = '20px'
const iconSize = '24px'
const rectangleIconSize = '50px'

const StyledOpenMenuButton = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 10px;
  background-color: ${COLORS.action_primary};
  transition: transform 200ms linear;
  ${Shadow}
  img{
    transition: transform 200ms linear;
    width: 15px;
  }
`
const StyledLogo = styled.img`
  margin-top: 60px;
  align-self: center;
`
const StyledIconsContainer = styled.div`
  margin-top: 88px;
`

const StyledIcon = styled.div`
  height: ${rectangleIconSize};
  background: ${COLORS.lightgrey};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-left: calc(${rectangleIconSize}/2 - ${iconSize}/2);
  transition: all 200ms ease-in-out;
  width: ${rectangleIconSize};
  border-radius:8px;
  img{
    width: ${iconSize};
    height: ${iconSize};
  }
  &+p{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    height: fit-content;
    top: 0;
    bottom: 0;
    margin: auto 0 auto calc(${rectangleIconSize} + 30px);
    right: 0;
    left: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${FONT_SIZE.card};
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.medium};
    transition: visibility 80ms, opacity 300ms linear, color 100ms, font-size 100ms linear, font-weight 100ms linear;
    ${props => props.open && css`
      visibility: visible;
      opacity: 1;
    `}
  }
  &:not(:last-child){
    margin-bottom: 16px;
  }
  &:before{
    content: '';
    position: absolute;
    height: 100%;
    border-radius: 8px 0 0 8px;
    background: ${COLORS.action_primary};
    top: 0;
    left: 0;
    width: 0;
    transition: all 200ms;
  }
`
const StyledSessionUser = styled.div`
  display: flex;
  p{
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.light};
    font-size: 14px;
    line-height: 23px;
  }
  button{
    padding: 0;
    font-weight: ${FONT_WEIGHT.extraBold};
    color: ${COLORS.action_primary};
    border-bottom: solid 1px ${COLORS.action_primary};
    line-height: 22px;
  }
`

const StyledUserInfo = styled.div`
  margin-left: 12px;

`

const StyledIconContainer = styled(NavLink)`
  &.active{
    ${StyledIcon}{
      width: ${props => props.open && `calc(100% + ${paddingX})`};
      border-radius: ${props => props.open && '8px 0 0'};
       &+p{
        font-size: ${FONT_SIZE.lg};
        color: ${COLORS.action_primary};
        font-weight: ${FONT_WEIGHT.extraBold};
       }
       &:before{
          width: 6px;
       }
    }
  }

  &:hover{
    cursor: pointer;
    ${StyledIcon}{
      width: ${props => props.open && `calc(100% + ${paddingX})`};
      border-radius: ${props => props.open && '8px 0 0'};
      &:before{
        width: 6px;
      }
    }
  }
`
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px ${paddingX} 29px ${paddingX};
  justify-content: space-between;
  //transition: padding-left 1s linear;
  //background: pink;
  ${StyledOpenMenuButton}{
     transform: ${props => props.open ? 'translateX(200px)' : 'translateX(0)'};
    img{
      transform: ${props => props.open ? 'rotate3d(0, 1, 0, 180deg)' : 'rotate3d(0)'};
    }
  }
  ${StyledLogo}{
    width: ${props => props.open ? '  150px;' : '  60px;'};
  }
  ${StyledIconsContainer}{
    margin-top: ${props => props.open ? '41px' : '88px'};
  }
  ${StyledUserInfo}{
    display: ${props => props.open ? 'block' : 'none'};
  }
`

export {
  StyledContainer,
  StyledOpenMenuButton,
  StyledLogo,
  StyledIconsContainer,
  StyledIcon,
  StyledIconContainer,
  StyledSessionUser,
  StyledUserInfo
}
