import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledMask } from './styles'

import './styles.css'
// env
const IN_BROWSER = typeof window !== 'undefined'
const UA = IN_BROWSER && window.navigator.userAgent.toLowerCase()
const IS_IE_9 = UA && UA.indexOf('msie 9.0') > 0
const CONTAINER_MODAL = document.getElementById('modal')

const Dialog = props => {
  const animation = (props.animationType === 'enter' ? props.enterAnimation : props.leaveAnimation) || props.animation
  const className = `rodal-dialog rodal-${animation}-${props.animationType}`
  const CloseButton = props.showCloseButton ? <span className="rodal-close" onClick={props.onClose} /> : null
  const { width, height, measure, duration, customStyles } = props
  const style = {
    width: width + measure,
    height: height + measure,
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  }
  const mergedStyles = { ...style, ...customStyles }

  return (
    <div style={mergedStyles} className={className}>
      {props.children}
      {CloseButton}
    </div>
  )
}

const MainModal = props => {
  const {
    closeMaskOnClick,
    onClose,
    onShow,
    customMaskStyles,
    showMask,
    duration,
    className,
    children
  } = props

  const [state, setState] = useState({
    isShow: false,
    animationType: 'leave'
  })

  const el = useRef(null)

  const enter = () => {
    setState({ isShow: true, animationType: 'enter' })
  }

  const leave = () => {
    setState({ ...state, animationType: 'leave' })
  }

  /*  useEffect(() => {
    if (props.visible) {
      enter()
    }
  }, [])*/

  useEffect(() => {
    if (props.visible) {
      enter()
    }

    if (!props.visible) {
      leave()
    }
  }, [props.visible])

  const onKeyUp = event => {
    if (props.closeOnEsc && event.keyCode === 27) {
      props.onClose()
    }
  }

  const animationEnd = event => {
    const { animationType } = state
    const { closeOnEsc, onAnimationEnd } = props

    if (animationType === 'leave') {
      setState({ ...state, isShow: false })
    } else if (closeOnEsc) {
      el.current.focus()
    }

    if (event.target === el && onAnimationEnd) {
      onAnimationEnd()
    }
  }

  const { isShow, animationType } = state
  const style = {
    display: isShow ? '' : 'none',
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  }

  return (
    <div
      style={style}
      className={`rodal rodal-fade-${animationType} ${className}`}
      onAnimationEnd={animationEnd}
      tabIndex="-1"
      ref={el}
      onKeyUp={onKeyUp}
    >
      {
        showMask && <StyledMask style={customMaskStyles} onClick={closeMaskOnClick ? onClose : () => {}}/>
      }

      <Dialog {...props} animationType={animationType}>
        {children}
      </Dialog>
    </div>
  )
}

const ModalHooks = (props) =>  ReactDOM.createPortal(<MainModal {...props} />, CONTAINER_MODAL)

ModalHooks.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  visible: PropTypes.bool,
  showMask: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  closeMaskOnClick: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  animation: PropTypes.string,
  enterAnimation: PropTypes.string,
  leaveAnimation: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
  customStyles: PropTypes.object,
  customMaskStyles: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func
}

ModalHooks.defaultProps = {
  width: 400,
  height: 240,
  measure: 'px',
  visible: false,
  showMask: true,
  closeOnEsc: false,
  closeMaskOnClick: true,
  showCloseButton: true,
  animation: 'zoom',
  enterAnimation: '',
  leaveAnimation: '',
  duration: 300,
  className: '',
  customStyles: {},
  customMaskStyles: {},
}

export default ModalHooks
