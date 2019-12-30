import styled from 'styled-components'
import { COLORS } from '../../../Styles/constantes'

const StyledContainer = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  //background: pink;
`

const StyledBackButton = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 10px;
  background-color: ${COLORS.action_primary};
  box-shadow: 0 8px 8px 0 rgba(55,27,0,0.15);
  img{
    width: 12px;
  }
`
const StyledLogo = styled.img`
  width: 60px;
  margin-top: 60px;
`
const StyledIconsContainer = styled.div`
  margin-top: 88px;
   
`
const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${COLORS.lightgrey};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img{
    width: 24px;
    height: 24px;
  }
  &:not(:last-child){
    margin-bottom: 16px;
  }
  
   
`

export {
  StyledContainer,
  StyledBackButton,
  StyledLogo,
  StyledIconsContainer,
  StyledIcon
}
