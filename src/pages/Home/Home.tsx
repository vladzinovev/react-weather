import React from 'react'
import { ThisDay } from './compoments/ThisDay/ThisDay';
import { ThisDayInfo } from './compoments/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

interface Props{

}

export const Home = (props: Props) =>{
    return (
        <div className={s.home}>  
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
        </div>
    );
};