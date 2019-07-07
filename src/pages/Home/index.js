import React, { PureComponent } from 'react'

import * as S from './styles'
import { Button } from 'app/ui-kit'
import thcLogo from '../../assets/images/thc-logo.jpg'

export default class Home extends PureComponent {
  render () {
    return <S.HomeComponent>
      <S.HomeContent>
        <S.StyledLogo src={thcLogo} />
        <S.StyledLink href='mailto:info@thehonorcode.com' target='_blank'>
          <Button>Get in touch</Button>
        </S.StyledLink>
      </S.HomeContent>
    </S.HomeComponent>
  }
}
