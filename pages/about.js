import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Header from '../components/header'

function AboutPage() {
  const count = useSelector(state => state.count)
  useEffect(() => {
    // register()
    return () => {
      // unregister()
    }
  }, [])
  return (
    <main>
      <Header />
      <section>
        <p>click count : {count}</p>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </section>
    </main>
  )
}

export default AboutPage
