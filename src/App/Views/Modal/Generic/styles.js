import styled from 'styled-components'

const StyledModal = styled.div`
  
`
const StyledMask = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`


export {
  StyledModal,
  StyledMask
}
