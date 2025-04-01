import React from 'react'
import s from './AboutUs.module.css'
const AboutUs = () => {
  return (
    <div className={s.container}>
        <h1 className={s.h1}>The Best Bakery and Confectionery</h1>
        <p className={s.slog}>Солодкі миті, які хочеться повторити</p>
        <div className={s.img}>
            <img src="/images/blueberries-1867398_1280.jpg" />
        </div>
    </div>
  )
}
export default AboutUs