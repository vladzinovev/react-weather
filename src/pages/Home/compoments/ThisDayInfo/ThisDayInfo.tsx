import React from 'react'
import s from './ThisDayInfo.module.scss';
import Cloud from '../../../../assets/images/Cloud.png';

interface Props{

}

export const ThisDayInfo = (props: Props) =>{
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}></div>
            <img src={Cloud} alt="Облако" />

        </div>
    );
};