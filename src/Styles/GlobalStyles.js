import { createGlobalStyle } from 'styled-components'
import { TEXT_SIZES, TEXT_WEIGHT } from './constantes'

const GlobalStyles = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css?family=Mukta+Vaani:200,300,400,500,600,700,800&display=swap');
  body{
    font-family: 'Mukta Vaani', sans-serif;
    font-size: ${TEXT_SIZES.md};
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }
  p{
    font-weight: ${TEXT_WEIGHT.medium};
  }
  h1{
    font-size: ${TEXT_SIZES.titlePage};
  }
  h2{
    font-size: ${TEXT_SIZES.titleSection};
  }
  h3{
    font-size: ${TEXT_SIZES.lg};
  }
  button:focus, 
  input:focus{
    outline: none;  
  }
`

export {
  GlobalStyles
}
