import React from 'react'
import { render } from 'react-dom'
import App from './app.js'
import { HashRouter } from 'react-router-dom'
if (module.hot) {
  module.hot.accept()
}

render(<HashRouter>
  <App/>
</HashRouter>,
document.getElementById('root')
)
