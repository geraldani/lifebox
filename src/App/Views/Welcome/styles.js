import styled from 'styled-components'
import { COLORS } from '../../../Styles/constantes'

const StyledRectangle = styled.div`
  background: ${COLORS.bg_primary};
  border-radius: 100px 0 0 0;
  padding: 65px 20px 119px 168px;
  margin-top: 80px;
  //display: grid;
  //grid-template-columns:  repeat(12, 60px);
  //grid-column-gap: 20px;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
`

export {
  StyledRectangle,
  MainContainer
}
