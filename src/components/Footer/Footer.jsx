import React from 'react'
import s from './Footer.module.css'
const Footer = () => {
  return (
    <div className={s.container}>
        <div className={s.component}>
            <h3 className={s.h3}>Adress</h3>
            <p className={s.p}>вулиця Верхній Вал, 54, Київ, 02000</p>
        </div>
        <div className={s.component}>
            <h3 className={s.h3}>Opening Hours</h3>
            <p className={s.p}>Mon - Fri: 8 AM - 8 PM</p>
            <p className={s.p}>Sat - Sun: 9 AM - 9 PM</p>
        </div>
        
    </div>
  )
}

export default Footer