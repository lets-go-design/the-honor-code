import React, { Component } from 'react'

import * as S from './styles'

export default class Loading extends Component {
  render () {
    return <S.Wrap><S.StyledSpinner /></S.Wrap>
  }
}
