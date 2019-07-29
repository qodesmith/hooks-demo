/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our components.
import Header from 'components/Header'
import NotFound from 'components/NotFound'
import Jokes from 'components/Jokes'
import LiveCoding from 'components/LiveCoding'
import OtherPage from 'components/OtherPage'

// Import React Router things.
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


// Top-level classes on the body. Feel free to remove / change.
document.body.className = 'bg-black-80 fw4 white'

// Mount our app.
ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Jokes} />
      <Route path="/live-coding" component={LiveCoding} />
      <Route path="/other" component={OtherPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
)
