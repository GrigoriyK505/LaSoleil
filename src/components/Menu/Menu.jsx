import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
  return (
    <div>
      <div className={s.container}>
        <h1 className={s.h1}>Випічка</h1>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/брауни.jpg" alt="Шоколадний брауні" />
          </div>
          <p className={s.text}>Шоколадний брауні</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/круасан.jpg" alt="Цукрові рогалики" />
          </div>
          <p className={s.text}>Цукрові рогалики</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/лимон.jpg" alt="Лимончелло" />
          </div>
          <p className={s.text}>Лимончелло</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/инабон.jpg" alt="Сінабони" />
          </div>
          <p className={s.text}>Сінабони</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/плетенка.jpg" alt="Хала від тьоті Сари" />
          </div>
          <p className={s.text}>Хала від тьоті Сари</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/кекс.jpg" alt="Банановий хліб" />
          </div>
          <p className={s.text}>Банановий хліб</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/печенье.jpg" alt="Італійський мармур" />
          </div>
          <p className={s.text}>Італійський мармур</p>
        </div>
      </div>

      <div className={s.container}>
        <h1 className={s.h1}>Кондитерські вироби</h1>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/торт сердца.jpg" alt="Закоханий крем-чіз" />
          </div>
          <p className={s.text}>Закоханий крем-чіз</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/13 лет.jpg" alt="Фісташкове диво" />
          </div>
          <p className={s.text}>Фісташкове диво</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/с днем рождения.jpg" alt="Шоко-шарм" />
          </div>
          <p className={s.text}>Шоко-шарм</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/тропический торт.jpg" alt="Полунична насолода" />
          </div>
          <p className={s.text}>Полунична насолода</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/синий торт.jpg" alt="Снікерс" />
          </div>
          <p className={s.text}>Снікерс</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/тирамису.jpg" alt="Тирамісу" />
          </div>
          <p className={s.text}>Тирамісу</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/тарт.jpg" alt="Тарт Лія" />
          </div>
          <p className={s.text}>Тарт "Лія"</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/бархат.jpg" alt="Червоний оксамит" />
          </div>
          <p className={s.text}>Червоний оксамит</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/морковный.jpg" alt="Морквяно-горіховий вибух" />
          </div>
          <p className={s.text}>Морквяно-горіховий вибух</p>
        </div>
        <div className={s.cards}>
          <div className={s.img}>
            <img src="/images/згущенка.jpg" alt="Дульсе-де-Лече" />
          </div>
          <p className={s.text}>Дульсе-де-Лече</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;