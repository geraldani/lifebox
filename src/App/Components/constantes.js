import { createBrowserHistory } from 'history'
const History = createBrowserHistory()

const ROUTES = {
  home: '/',
  start: '/inicio',
  aboutMe: '/acerca-de-mi',
  health: '/salud',
  services: '/servicios',
  bienes: '/bienes',
  legal: '/legal',
  photo: '/fotografias',
  letters: '/cartas',
  destinatary: '/destinatarios'
}

export {
  ROUTES,
  History
}
