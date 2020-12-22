import React from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import DailyStats from './dailyStats'

export default function InfoPanel({currentScreen}) {

    if(currentScreen === 0)
        return <GlobalStats /> 

    else if(currentScreen === 1)
        return <AllCountries />
    
    else return <DailyStats/>
}
