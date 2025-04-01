import React from 'react'
import s from './Menu.module.css'
const Menu = () => {
  return (
<div>
    
    <div className={s.container}>
        <h1 className={s.h1}>Випічка</h1>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/брауни.jpg" />
            </div>
            <p className={s.text}>Шоколадний брауні</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/круасан.jpg" />
            </div>
            <p className={s.text}>Цукрові рогалики</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/лимон.jpg" />
            </div>
            <p className={s.text}>Лимончелло</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/инабон.jpg" />
            </div>
            <p className={s.text}>Сінабони</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/плетенка.jpg" />
            </div>
            <p className={s.text}>Хала від тьоті Сари</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/кекс.jpg" />
            </div>
            <p className={s.text}>Банановий хліб</p>
        </div>
        <div className={s.cards}>
            <div className={s.img}>
                <img src="../../../public/images/печенье.jpg" />
            </div>
            <p className={s.text}>Італійський мармур</p>
        </div>
    </div>

<div className={s.container}>
<h1 className={s.h1}>Кондитерські вироби</h1>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/торт сердца.jpg" />
    </div>
    <p className={s.text}>Закоханий крем-чіз</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/13 лет.jpg" />
    </div>
    <p className={s.text}>Фісташкове диво</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/с днем рождения.jpg" />
    </div>
    <p className={s.text}>Шоко-шарм</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/тропический торт.jpg" />
    </div>
    <p className={s.text}>Полунична насолода</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/синий торт.jpg" />
    </div>
    <p className={s.text}>Снікерс</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/тирамису.jpg" />
    </div>
    <p className={s.text}>Тирамісу</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/тарт.jpg" />
    </div>
    <p className={s.text}>Тарт "Лія"</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/бархат.jpg" />
    </div>
    <p className={s.text}>Червоний оксамит</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/морковный.jpg" />
    </div>
    <p className={s.text}>Морквяно-горіховий вибух</p>
</div>
<div className={s.cards}>
    <div className={s.img}>
        <img src="../../../public/images/згущенка.jpg" />
    </div>
    <p className={s.text}>Дульсе-де-Лече</p>
</div>

</div>

</div>
  );
};

export default Menu