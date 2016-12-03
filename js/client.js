import Layout from "./pages/Layout";
import NotFound from './components/Misc/NotFound';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Test from './components/Misc/Test'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const app = document.getElementById('app')

const defaultState = {
  appName: 'ZachApp',
  articles: null
};
const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles }
    }
    return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}> 
        <Route path='/' component={Layout}>
            <IndexRoute path='' component={Home} />
             <Route path="/test" component={Test} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
</Provider>,
app); 