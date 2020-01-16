import React from "react"
import App from "next/app"
import withRedux from "next-redux-wrapper"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux"
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from '../store'
import '../i18n'
/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const persistedReducer = persistReducer({ key: 'root', storage }, reducer)
const makeStore = (initialState, options) => {
  return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // // we can dispatch from here too
    // ctx.store.dispatch({type: 'FOO', payload: 'load app'})
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    const persistor = persistStore(store)
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    )
  }

}

export default withRedux(makeStore)(MyApp)