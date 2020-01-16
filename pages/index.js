
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
// import { register, unregister } from 'next-offline/runtime'
import Layout from '../components/layout'

const Page = (props) => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    M.AutoInit()
    // register()
    // return () => {
    //   unregister()
    // }
  }, [])
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="parallax-container">
        <div className="parallax"><img src="http://materializecss.com/images/parallax1.jpg" /></div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">{t('welcome')}</h2>
          <p className="grey-text text-darken-3 lighten-3"></p>

          <h5 className="">Counting stars: {count}</h5>
          <button className="waves-effect waves-light btn" onClick={() => dispatch({ type: 'INCREMENT' })}> + </button> &nbsp;
          <button className="waves-effect waves-light btn" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button> &nbsp;
          <button className="waves-effect waves-light btn" onClick={() => dispatch({ type: 'RESET' })}>reset</button>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax"><img src="http://materializecss.com/images/parallax2.jpg" /></div>
      </div>
    </Layout>
  )
}
Page.getInitialProps = ({ store, isServer }) => {
  return { custom: isServer ? 'server' : 'client' }
}

export default Page