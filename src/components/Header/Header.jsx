import React from 'react'
import s from './Header.module.css'
const Header = () => {
  return (
    <header>
        <div className={s.icon}>
            <img src="../../../public/images/donut.png" />
        </div>
        <h1 className={s.h1}>La Soleil</h1>
        <h2 className={s.h2}>Ваша улюблена пекарня та кондитерська</h2>
    </header>
  )
}

export default Header