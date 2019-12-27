import React from 'react'
import ReactDOM from 'react-dom'
// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App/Components/App'


render()

// Hot Module Replacement
function render () {
  ReactDOM.render(
  <App />,
    document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./App/Components/App', () => {
    render()
  })
}
