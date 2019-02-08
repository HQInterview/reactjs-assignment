import React, { Component } from 'react'
import Link from 'next/link';
import Drawer from '../Drawer/Drawer';

import {
  GlobalStyle,
  Wrapper,
  MenuBar,
  Title,
  ELegantShadow,
  NytLogo,
  MenuWrapper,
  MenuLink,
  DrawerContaner,
  ContentDrawerItem,
  Button,
  DrawButtonWrap
} from './Style';

class Layout extends Component {
  state={
    open: false,
  }
  
  handleToggleOpen=()=> {
    this.setState({open:!this.state.open})
  };

  render () {
    return (
      <Wrapper>
        <GlobalStyle />
        <header>
          <MenuBar>
            <NytLogo>
              <img src="static/nyt_logo_round.png"
               width='60px' height='60px'
              />
            </NytLogo>
            <ELegantShadow>New York Times</ELegantShadow>
            <DrawButtonWrap><Button onClick={()=>this.handleToggleOpen()}>
              <img src="static/drawerx32.png" /></Button>
            </DrawButtonWrap>
            <MenuWrapper>
              <Link href='/'>
                <MenuLink active={true}>Home</MenuLink>
              </Link>
            </MenuWrapper>
            <DrawerContaner>
              <Drawer open={this.state.open} position='left' onDismiss={() => this.handleToggleOpen()} backgroundColor='#fff' size='250px'>
                <ContentDrawerItem><Link href='/'><a>Home</a></Link></ContentDrawerItem>
              </Drawer>
            </DrawerContaner>
          </MenuBar>
        </header>
        { this.props.children }
      </Wrapper>
    )
  }
}
export default Layout;