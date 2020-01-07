import styled, { css } from 'styled-components'
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../../Styles/constantes'
import { CenteredItemColum, CenteredItemRow, Shadow } from '../../../../Styles/GlobalStyles'

const heightRectangleAdded = '111px'

const styledCardItem = (type) => {
  switch (type) {
    case 'status':
      return (
        css` ${StyledCardSubItemText}{
          padding-left: 14px;
          &:before{
            content: '';
            width: 8px;
            height: 8px;
            background: ${COLORS.issue_primary};
            position: absolute;
            border-radius: 50%;
            top: 9px;
            left: 0;
          }
        }`
      )
    case 'added':
      return (
        css`
          ${StyledTitleCard}, ${StyledCardSubItem}, ${StyledCardSubItemText}{
            color: ${COLORS.bg_secondary};
          }
          &:before{
            content: '';
            width: 100%;
            position: absolute;
            bottom:0;
            left: 0;
            height: ${heightRectangleAdded};
            border-radius: 0 0 8px 8px;
            background: ${COLORS.violet_secondary};
          }
        `
      )
    case 'addImage':
      return (
        css`
          ${CenteredItemRow};
          ${StyledIconContainer}{
            ${CenteredItemColum};
            cursor: pointer;
            img{
              ${Shadow}
              width: 42px;
              height: 42px;
              background-color: ${COLORS.action_primary};
              padding: 15px;
              border-radius: 10px;
            }
            p{
              color: ${COLORS.action_primary};
              font-weight: ${FONT_WEIGHT.extraBold};
              font-size: ${FONT_SIZE.sm};
              line-height: 20px;
              margin-top: 16px;
            }
          }
        `
      )
  }
}

const StyledTitleCard = styled.h5`
    font-size: ${FONT_SIZE.card};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 30px;
    margin-top: 43px;
    margin-bottom: 6px;
`

const StyledCardSubItem = styled.h6`
    line-height: 23px;
    font-size: ${FONT_SIZE.text};
    font-weight: ${FONT_WEIGHT.light};
`

const StyledCardSubItemText = styled.p`
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.medium};
    line-height: 27px;
    position: relative;
    margin-top: -6px;
`
const StyledCheckIcon = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  background: ${COLORS.violet_forth};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: calc(${heightRectangleAdded} + 8px);
  right: 8px;
  img{
      width: 12px;
    }
`

const StyledIconContainer = styled.div``

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 220px;
  //width: 25%;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  margin-right: 20px;
  padding: 23px 16px 16px 16px;
  position: relative;
  transition: all 200ms;
  &:hover{
    ${Shadow}
  }
  ${StyledIconContainer} img{
    width: 68px;
  }
  ${StyledTitleCard}, ${StyledCardSubItem}, ${StyledCardSubItemText}{
    color: ${COLORS.action_secondary};
    position: relative;
    z-index: 50;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  ${props => styledCardItem(props.type)}
`

export {
  StyledCard,
  StyledTitleCard,
  StyledCardSubItem,
  StyledCardSubItemText,
  StyledCheckIcon,
  StyledIconContainer
}
