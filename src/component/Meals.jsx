import React from 'react';
// import { useState, useEffect } from 'react';
import MealsItem from './MealsItem';
import useHttp from '../hooks/useHttp';

const requestConfig = {};


export default function Meals() {
    const {
        data : loadedMeals,
        isLoading,
        error,
     } = useHttp('http://localhost:3000/meals',requestConfig, []);


    //  console.log(loadedMeals);

 if(isLoading) {
    return <p>Fetching meals...</p>
 }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealsItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
