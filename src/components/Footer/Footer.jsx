import React from 'react'
import s from './Footer.module.css'
const Footer = () => {
  return (
    <div className={s.container}>
        <div className={s.component}>
            <h3 className={s.h3}>Adress</h3>
            <p className={s.p}></p>
        </div>
        <div className={s.component}>
            <h3 className={s.h3}>Opening Hours</h3>
            <p className={s.p}>Weeks</p>
        </div>
        
    </div>
  )
}

export default Footer