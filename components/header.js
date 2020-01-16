import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Header() {
  const { t, i18n } = useTranslation()
  return (
    <nav>
      <div className="nav-wrapper">
        {/* <a href="#" className="brand-logo right">Logo</a> */}
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <Link href="/about"><a>About</a></Link>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li> <a onClick={() => i18n.changeLanguage('en')}>English</a></li>
          <li> <a onClick={() => i18n.changeLanguage('id')}>Indonesia</a></li>
        </ul>
      </div>
    </nav>
  );
}