import styled from 'styled-components'

const StyledModal = styled.div`
   top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: fixed;
    display: ${props => props.isShow ? '' : 'none'};
    animation-duration: ${props => props.duration}ms;
`
const StyledMask = styled.div`
    position: absolute;
    background: ${props => props.bgMaskColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`
const StyledDialog = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 101;
  padding: 15px;
  background: ${props => props.bgColor};
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  width: ${props => props.width};
  height: ${props => props.height};
  animation-duration: ${props => props.animationDuration}ms;
  &:focus {
    outline: none;
  }
`

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  
  &:before, 
  &:after{
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background .2s;
    transition: background .2s;
  }
  &:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  &:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  &:hover:before,
  &:hover:after {
    background: #333;
  }
  
  &:focus{
    outline: none;
  }
`


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
`
export {
  StyledModal,
  StyledMask,
  StyledDialog,
  StyledCloseButton,
  StyledContainer
}
