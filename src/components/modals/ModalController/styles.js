import styled, { createGlobalStyle } from 'styled-components'

import { X } from 'app/ui-kit/Icons'

export const Wrap = styled.div``
export const OverlayWrap = styled.div``
export const CloseX = styled(X)`
  padding: 25px;
  right: 0;
  position: absolute;
  top: 0%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const GlobalModalStyle = createGlobalStyle`
  .Aria-dialog {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    transition: opacity 300ms ease, transform 300ms ease;
    transform: translate(0, -50px);
    opacity: 0.3;

    &.has-entered {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }

  .Aria-underlay {
    opacity: 0;
    transition: opacity 300ms ease;
    padding: 7vw 0;
    box-sizing: border-box;

    &.has-entered {
      opacity: 1;
    }
  }
`
