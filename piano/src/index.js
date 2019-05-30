import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'; // is a middleware
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; // similat like root reducer
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// 1. create store as a fuck with 2 arguments

//  - useing applyMiddleware to add the thunk middleware to the store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig), // a way to pass the fbase config here and then we can get access to firebase
    reactReduxFirebase(fbConfig)
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
