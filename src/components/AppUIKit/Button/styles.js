import styled, { css } from 'styled-components'

import { Colors, Breakpoints, Type } from 'app/styles'

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 275ms ease;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  background: ${Colors.black};
  border-radius: 55px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: .5;
  transition: all 275ms ease;

  &:hover {
    background: ${Colors.backgroundDark};
    transform: scale(1);
    opacity: 1;
  }

  &:active {
    background: ${Colors.brandLight};
  }

  ${props => props.disabled && css`
    opacity: .1;
    pointer-events: none;
  `}

  ${props => props.secondary && css`
    background: ${Colors.skyBlue};
    color: ${Colors.darkBlue};

    &:hover {
      background: ${Colors.skyBlueLight};
    }
  `}

  ${props => props.size === 'small' && css`
    height: 45px;
    min-width: auto;
  `}

  @media(max-width: ${Breakpoints.main}){
    height: 45px;
    min-width: auto;
  }

  ${props => props.type === 'condensed' && css`
    ${Type.pillButton};
    height: 36px;
    min-width: auto;

    @media(max-width: ${Breakpoints.main}){
      height: 36px;
    }
  `}
`

export const ButtonText = styled.div`
  font-family: ${Type.RingsideWide};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;

  ${props => props.size === 'small' && css`
    font-size: 16px;
  `}

  ${props => props.type === 'condensed' && css`
    ${Type.pillButton};
    padding: 0 20px;
  `}


  @media(max-width: ${Breakpoints.main}){
    font-size: 16px;
  }
`
