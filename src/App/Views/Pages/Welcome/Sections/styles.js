import styled, { css } from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../../Styles/constantes'

const StyledCardsContainer = styled.div`
   margin: 24px 0 40px 0;
   display: flex;
   flex-wrap: wrap;
`

const StyledItem = styled.div`
    padding: 8px 16px;
   ${props => props.active && css`
    color: ${COLORS.action_primary};
    border-radius: 12px 11px 11px 12px;
    box-shadow: 0 4px 15px 0 rgba(101,31,255,0.16);
  `};
  svg{
    margin-right: 8px;
  }
`

const StyledOptions = styled.div`
  margin-right: 135px;
  text-align: right;
  font-size: ${FONT_SIZE.sm};
  line-height: 20px;
  font-weight: ${FONT_WEIGHT.extraBold};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.bg_secondary};
  border-radius: 12px 9px 9px 12px;
  color: ${COLORS.gray};
`

export { StyledCardsContainer, StyledOptions, StyledItem }
