import styled from 'styled-components'
import { COLORS, FONT_WEIGHT } from '../../../Styles/constantes'

const StyledTitle = styled.h1`
  color: ${COLORS.action_secondary};
  line-height: 66px;
  font-weight: ${FONT_WEIGHT.extraBold};
`

const StyledSubtitle = styled.h3`
  line-height: 34px;
  font-weight: ${FONT_WEIGHT.extraLight};
  color: ${COLORS.action_secondary}
`

const StyledTitleSection = styled.h2`
  color: ${COLORS.action_secondary};
  font-weight: ${FONT_WEIGHT.extraBold};
  line-height: 40px;
`

export {
  StyledTitle,
  StyledSubtitle,
  StyledTitleSection
}
