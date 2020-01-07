import { createGlobalStyle, css } from 'styled-components'
import { FONT_SIZE, FONT_WEIGHT } from './constantes'

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Mukta Vaani', sans-serif;
    font-size: ${FONT_SIZE.md};
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }
  p{
    font-weight: ${FONT_WEIGHT.medium};
  }
  h1{
    font-size: ${FONT_SIZE.titlePage};
  }
  h2{
    font-size: ${FONT_SIZE.titleSection};
  }
  h3{
    font-size: ${FONT_SIZE.lg};
  }
  button:focus, 
  input:focus{
    outline: none;  
  }
  button{
    border: none;
    background: none;
  }
`

const Shadow = css`
  box-shadow: 0 8px 8px 0 rgba(55,27,0,0.15);
`
const CenteredItemColum = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CenteredItemRow = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
  GlobalStyles, Shadow, CenteredItemColum, CenteredItemRow
}
