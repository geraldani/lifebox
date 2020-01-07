import React, { useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from '../../Styles/GlobalStyles'
import { History, ROUTES } from './constantes'
import { StyledMainContainer, StyledRectangle } from '../Views/Pages/Welcome/styles'
import { Menu } from '../Views/Menu'
import { Welcome } from '../Views/Pages/Welcome'
import { Health } from '../Views/Pages/Health'
import { Services } from '../Views/Pages/Services'
import { Bienes } from '../Views/Pages/Bienes'
import { Legal } from '../Views/Pages/Legal'
import { Photos } from '../Views/Pages/Photos'
import { Letters } from '../Views/Pages/Letters'
import { Destinaratio } from '../Views/Pages/Destinatario'
import { About } from '../Views/Pages/About'

const Noesxiste = () => <h2>No existe la pagina</h2>
const App = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const toggleMenu = () => setOpenedMenu(!openedMenu)
  return (
    <Router history={History}>
      <GlobalStyles />
      <StyledMainContainer open={openedMenu}>
        <Menu openCloseMenu={toggleMenu} openedMenu={openedMenu} />
        <StyledRectangle open={openedMenu}>
          <Switch>
            <Route exact path={ROUTES.home} component={Welcome} />
            <Route exact path={ROUTES.start} component={Welcome} />
            <Route exact path={ROUTES.health} component={Health} />
            <Route exact path={ROUTES.services} component={Services} />
            <Route exact path={ROUTES.bienes} component={Bienes} />
            <Route exact path={ROUTES.aboutMe} component={About} />
            <Route exact path={ROUTES.legal} component={Legal} />
            <Route exact path={ROUTES.photo} component={Photos} />
            <Route exact path={ROUTES.letters} component={Letters} />
            <Route exact path={ROUTES.destinatary} component={Destinaratio} />
            <Route component={Noesxiste} />
          </Switch>
        </StyledRectangle>
      </StyledMainContainer>
    </Router>
  )
}

export default App
