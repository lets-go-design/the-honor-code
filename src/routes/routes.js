import Root from '../components/Root/Root'
import Home from '../pages/Home'
import NotFound from '../components/NotFound/NotFound'

import navThemes from './navThemes'

// Navigation is themeable for both mobile and desktop
// see navThemes.js to customize themes,
// and set them on each route with navTheme: navThemes.myTheme

export default [{
  component: Root,
  routes: [{
    path: '/',
    exact: true,
    component: Home,
    navTheme: navThemes.home,
    meta: {
      title: 'The Honor Code',
      description: 'A media & production studio focused on sharing impactful stories.'
    }
  }, {
    path: '*',
    component: NotFound,
    navTheme: navThemes.notFound,
    meta: {
      title: 'Not found',
      description: '404'
    }
  }]
}]
