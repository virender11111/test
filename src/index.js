
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import App from './App';
import {store} from './store';
import Foo from './Foo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';


render(
   
  <Provider store={store}>
    <Router>
   		<div>
         <Route exact path ="/" component = {App} />
         <Route path = "/foo" component = {Foo} />
        </div>
   </Router>
  </Provider>,
  document.getElementById('root')
)
