import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Gallery from './view/gallery'
import Guaer from './view/guaer/guaer'
import Gen from './view/gen/gen'
import XXie from './view/xxie/xie'
import Kms from './view/kms/index.js'
import Jingli from './view/jingli/index.js'
import Pengpeng from './view/pengpeng/index.js'
import TianTian from './view/ctiantian/index.js'
import Hu from './view/hu/index.js'
import Cai from './view/caicai/index.js'
import Pi from './view/pi/index.js'

if (module.hot) {
  module.hot.accept()
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={() => { return <Gallery /> }} />
        <Route path='/Guaer' component={() => { return <Guaer /> }} />
        <Route path='/Gen' component={() => { return <Gen /> }} />
        <Route path='/XXie' component={() => { return <XXie /> }} />
        <Route path='/Kms' component={() => { return <Kms /> }} />
        <Route path='/Jingli' component={() => { return <Jingli /> }} />
        <Route path='/Pengpeng' component={() => { return <Pengpeng /> }} />
        <Route path='/CTianTian' component={() => { return <TianTian /> }} />
        <Route path='/Dhu' component={() => { return <Hu /> }} />
        <Route path='/cai' component={() => { return <Cai /> }} />
        <Route path='/pi' component={() => { return <Pi /> }} />
      </Switch>
    )
  }
}

export default App
