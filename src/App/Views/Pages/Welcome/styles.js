import styled, { keyframes } from 'styled-components'
import { COLORS } from '../../../../Styles/constantes'

const StyledRectangle = styled.div`
  background: ${COLORS.bg_primary};
  border-radius: 100px 0 0 0;
  padding: 65px 20px 119px ${props => props.open ? '75px' : '168px'};
  margin-top: 80px;
  //display: grid;
  //grid-template-columns:  repeat(12, 60px);
  //grid-column-gap: 20px;
`

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.open ? '282px' : '90px'} auto;
  transition: all 2s linear;
`

export {
  StyledRectangle,
  StyledMainContainer
}
