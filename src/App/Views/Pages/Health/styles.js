import styled from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../Styles/constantes'
import { ButtonImage } from '../../Buttons/ButtonImage'

const StyledCardMainInfo = styled.div`
  background-color: ${COLORS.bg_secondary};
  border: 1px solid ${COLORS.border};
  border-radius: 10px;
  width: 213px;
  margin-right: 30px;
  padding: 27px;
  position: relative;
  img{
    position: absolute;
    width: 25px;
    margin-top: 10px;
    margin-right: 12px;
    top:0;
    right: 0;
  }
  p{
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.light};
    font-size: ${FONT_SIZE.md};
    line-height: 27px;
  }
  input{
    border:none;
    border-bottom: 2px solid ${COLORS.action_primary};
  }
  h5{
      border-bottom: 1px solid #C4C4C4;
  }
  h5, input{
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.extraBold};
    font-size: 35px;
    line-height: 59px;
    width: 150px;
    &::placeholder, span{
      color: #F1F1F1;
    }
  }
`

const StyledCardBody = styled.div`
  div{
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 16px 24px;
    &>p{
      cursor: default;
      transition: 200ms;
      font-weight: ${FONT_WEIGHT.light};
      &:last-child{
        font-size: ${FONT_SIZE.sm};
      }
       &:first-child{
        font-size: ${FONT_SIZE.md};
      }
      &:first-child:hover{
       color: ${COLORS.action_primary};
      font-weight: ${FONT_WEIGHT.extraBold};
      }
    }
    &:not(:last-child):after{
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #F7F5F5;
      bottom: 0;
      left: 0;
    }
  }
`

const StyledCardHeader = styled.div`
    background-color: ${COLORS.cardHeader};
    //background-color: red;
    padding: 26px 24px;
    border-radius: 10px 10px 0 0;
    p{
      font-weight: ${FONT_WEIGHT.medium};
      font-size: ${FONT_SIZE.text};
    }


`

const StyledButtonImage = styled(ButtonImage)`
  position: absolute;
  right: 18px;
  top: 16px;
  padding: 0;
`

const StyledCardHealth = styled.div`
  border-radius: 10px;
  box-shadow: 0 7px 20px 0 rgba(74,48,109,0.25);
  margin-bottom: 24px;
  background-color: ${COLORS.bg_secondary};
  position: relative;
  p{
    color: ${COLORS.action_secondary};
  }
  h5{
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.medium};
    font-size: ${FONT_SIZE.titleSection};
  }
 
`

const StyledNewArticle = styled.span`
  background-color: ${COLORS.success_primary};
  font-size: ${FONT_SIZE.text};
  font-weight: ${FONT_WEIGHT.extraBold};
  color: ${COLORS.bg_secondary};
  padding: 0 8px;
  border-radius: 4px;
  margin-right: 15px;
`

export {
  StyledCardMainInfo,
  StyledCardHealth,
  StyledCardHeader,
  StyledCardBody,
  StyledButtonImage,
  StyledNewArticle
}
