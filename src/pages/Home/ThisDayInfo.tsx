import React from 'react'
import s from './ThisDayInfo.module.scss';

interface Props{

}

export const ThisDayInfo = (props: Props) =>{
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.this__temp}></div>
                <div className={s.this__today}></div>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={s.whis__city}>
                    Город: <span>Санкт-Петербург</span> 
                </div>
            </div>

        </div>
    );
};