import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import * as readerActions from './actions/reader'

import App from './containers/App'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(readerActions.setSpread(true))
store.dispatch(readerActions.setComic({
  title: 'My Comic',
  pages: [
    { number: 1, format: 'single', image: 'http://goodcomics.comicbookresources.com/wp-content/uploads/2014/12/artistkane4.jpg' },
    { number: 2, format: 'single', image: 'http://static.comicvine.com/uploads/original/6/62586/1258923-galactusbeatdown1.jpg' },
    { number: 3, format: 'double', image: 'http://evilavatar.com/images/thumbs/comics/SI-Splash1.jpg' },
    { number: 4, format: 'single', image: 'http://goodcomics.comicbookresources.com/wp-content/uploads/2009/01/kara2.jpg' },
    { number: 5, format: 'single', image: 'http://www.idrawdigital.com/wp-content/uploads/2009/11/new-page.jpg' },
    { number: 6, format: 'single', image: 'http://goodcomics.comicbookresources.com/wp-content/uploads/2006/08/Avengers138-05.jpg' },
    { number: 7, format: 'single', image: 'http://www.idrawdigital.com/wp-content/uploads/2009/11/Batroc-vs-Capn.jpg' },
    { number: 8, format: 'single', image: 'http://goodcomics.comicbookresources.com/wp-content/uploads/2011/04/homosuperior2.jpg' }
  ]
}))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
