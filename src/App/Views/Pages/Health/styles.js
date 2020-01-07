import styled from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../Styles/constantes'

const StyledCardMainInfo = styled.div`
  background-color: ${COLORS.bg_secondary};
  border: 0.5px solid ${COLORS.border};
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
  span{
    color: ${COLORS.action_secondary};
    font-weight: ${FONT_WEIGHT.extraBold};
    font-size: 35px;
    line-height: 59px;
    position: relative;
    &:after{
      content: '';
      width: 150px;
      height: 1px;
      background-color: #C4C4C4;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`

export {
  StyledCardMainInfo
}
