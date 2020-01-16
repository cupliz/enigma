
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { register, unregister } from 'next-offline/runtime'
import Layout from '../components/layout'

const Page = (props) => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    // register()
    // return () => {
    //   unregister()
    // }
  }, [])
  return (
    <Layout>
      <h1 className="mb-4 center"> {t('welcome')} {process.env.VERSION} </h1>
      <hr />
      <div className="row mt-4">
        <h6 className="col s12 m6">Counting stars: {count}</h6>
        <div className="col s12 m6 right-align mb-2">
          <button className="btn" onClick={() => dispatch({ type: 'INCREMENT' })}> + </button> &nbsp;
          <button className="btn" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button> &nbsp;
          <button className="btn red" onClick={() => dispatch({ type: 'RESET' })}>reset</button>
        </div>
        {
          Array(count).fill().map((l, i) => (
            <div className="col s1" key={i}> <i className="material-icons">star_border</i></div>
          ))
        }
      </div>
      <p>
      </p>
    </Layout>
  )
}
Page.getInitialProps = ({ store, isServer }) => {
  return { custom: isServer ? 'server' : 'client' }
}

export default Page