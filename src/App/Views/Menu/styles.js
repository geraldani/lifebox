import styled, { css } from 'styled-components'
import { COLORS } from '../../../Styles/constantes'
import { Shadow } from '../../../Styles/GlobalStyles'

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
  //justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-left: calc(${rectangleIconSize}/2 - ${iconSize}/2);
  img{
    width: ${iconSize};
    height: ${iconSize};
  }
  span{
    visibility: hidden;
    opacity: 0;
    transition: visibility 80ms, opacity 300ms linear;
  }
  &:not(:last-child){
    margin-bottom: 16px;
  }
  &:before{
    content: '';
    position: absolute;
    height: 100%;
    border-radius: 8px 0 0 8px;
    width: ${props => props.active ? '6px' : '0'};
    background: ${COLORS.action_primary};
    top: 0;
    left: 0;
    transition: all 200ms;
  }
  &:hover:before{
    width: 6px;
  }
`
// align-items: ${props => props.open ? 'flex-start' : 'center'};
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
    //transition: width 200ms linear;
  }
  ${StyledIconsContainer}{
    margin-top: ${props => props.open ? '41px' : '88px'};
  }
  ${StyledIcon}{
    transition: all 200ms ease-in-out;
    border-radius: ${props => props.open ? '8px 0 0' : '8px'};
    width: ${props => props.open ? `calc(100% + ${paddingX})` : rectangleIconSize};
    span{
      ${props => props.open && css`
        visibility: visible;
        opacity: 1;
      `}
    }
  }
`

export {
  StyledContainer,
  StyledOpenMenuButton,
  StyledLogo,
  StyledIconsContainer,
  StyledIcon
}
