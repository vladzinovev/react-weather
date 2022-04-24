import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './compoments/Days/Days';
import { selectCurrentWeatherData } from '../../store/selectors';
import { ThisDay } from './compoments/ThisDay/ThisDay';
import { ThisDayInfo } from './compoments/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import { Weather } from '../../../src/store/types/types';

interface Props{

}

export const Home = (props: Props) =>{
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData);

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'));
    }, []);
    
    return (
        <div className={s.home}>  
            <div className={s.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    );
};