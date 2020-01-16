
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

const Page = () => {
  const count = useSelector(state => state.count)
  const { t } = useTranslation()
  return (
    <Layout>
      <h1 className="mb-4 center"> {t('about')} </h1>
      <hr />
      <div className="row mt-4">
        <h6 className="col s12 m6">Getting stars {count}</h6>
        {
          Array(count).fill().map((l, i) => (
            <div className="col s1" key={i}> <i className="material-icons">star_border</i></div>
          ))
        }
      </div>
    </Layout>
  )
}
Page.getInitialProps = ({ store, isServer }) => {
  return { custom: isServer ? 'server' : 'client' }
}

export default Page