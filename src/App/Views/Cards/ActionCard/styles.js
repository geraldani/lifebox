import styled from 'styled-components'
import { COLORS, TEXT_WEIGHT } from '../../../../Styles/constantes'


const StyledTitle = styled.h2`
  font-weight: ${TEXT_WEIGHT.extraBold};
  color: ${COLORS.bg_secondary};
  line-height: 40px;
  margin-bottom: 16px;
`

const StyledParagraph = styled.p`
    color: ${COLORS.bg_secondary};
    line-height: 22px;

`

const StyledButtonAdd = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 10px;
  background-color: ${COLORS.bg_secondary};
  box-shadow: 0 8px 8px 0 rgba(55,27,0,0.15);
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  svg{
    width: 20px;
    height: 20px;  
    fill: ${COLORS.action_primary};
  }
`

const StyledContainer = styled.div`
  background: ${COLORS.action_ternary};
  border-radius: 10px;
  padding: 17px 24px 24px 24px;
  width: 459px;
  grid-row: 4;
  margin-right: 20px;
  margin-top: 46px;
  margin-bottom: 46px;
  position: relative;
`

export { StyledTitle, StyledParagraph, StyledContainer, StyledButtonAdd }
