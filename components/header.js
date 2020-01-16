import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Header() {
  const { i18n } = useTranslation()
  return (
    <div className="row" style={{marginTop: 10}}>
      <div className="col s6 links left-align">
        <Link href="/"><a>Home</a></Link>
        <a>|</a>
        <Link href="/about"><a>About</a></Link>
      </div>
      <div className="col s6 right-align">
        <a className="btn-small indigo active mr-2" onClick={() => i18n.changeLanguage('en')}>EN</a> &nbsp;
      <a className="btn-small indigo active" onClick={() => i18n.changeLanguage('id')}>ID</a>
      </div>
    </div>
  )
}
