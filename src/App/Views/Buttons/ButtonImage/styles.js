import styled from 'styled-components'
import { CenteredItemColum, Shadow } from '../../../../Styles/GlobalStyles'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../Styles/constantes'

const StyledIconContainer = styled.button`
  cursor: pointer;
  ${CenteredItemColum};
  img{
    ${Shadow};
    width: 42px;
    height: 42px;
    background-color: ${COLORS.action_primary};
    padding: 15px;
    border-radius: 10px;
  }
  span{
    color: ${COLORS.action_primary};
    font-weight: ${FONT_WEIGHT.extraBold};
    font-size: ${FONT_SIZE.sm};
    line-height: 20px;
    margin-top: 16px;
  }
`
export {
  StyledIconContainer
}
