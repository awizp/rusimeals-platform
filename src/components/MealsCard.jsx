import { useContext, useState } from 'react';
import { MealsContext } from '../context/MealsContext';
import { useNavigate } from 'react-router';

const MealsCard = ({ meal }) => {

    const { handleLookupMeal } = useContext(MealsContext);
    const navigate = useNavigate();

    const handleRecipeLookup = (mealId) => {
        handleLookupMeal(mealId);
        navigate(`/meal/${mealId}`);
    };

    return (
        <div className='w-full rounded-2xl shadow hover:shadow-lg bg-white flex flex-col justify-center items-center gap-5 group relative p-3 transition duration-300 overflow-hidden'>

            <h2 className='z-10 text-2xl font-chewy w-full text-left group-hover:text-white group-hover:translate-y-3 group-hover:text-center transition duration-300 truncate'>
                {meal.strMeal}
            </h2>

            <div className='w-full overflow-hidden rounded-2xl z-10'>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='w-full h-full object-fill group-hover:scale-105 transition duration-300'
                />
            </div>

            <p className='z-10 font-chewy text-lg w-full text-left group-hover:-translate-y-3 transition duration-300'>
                {meal.strArea ? meal.strArea : meal.strCountry} Meal
            </p>

            <button
                className='z-10 w-full py-2 px-3 flex justify-between gap-2 items-center bg-black cursor-pointer group-hover:bg-zinc-950 transition duration-300 text-white rounded-xl group-hover:-translate-y-3 hover:bg-zinc-900 font-chewy text-lg group-hover:shadow-lg group-hover:shadow-amber-400 hover:shadow-amber-400'
                onClick={() => handleRecipeLookup(meal.idMeal)}
            >
                See recipe <span className='transition duration-300 group-hover:-rotate-45 group-hover:text-amber-500'><ion-icon name="beer"></ion-icon></span>
            </button>

            <div className='hidden -translate-y-full group-hover:block group-hover:translate-y-0 transition duration-300 absolute top-0 left-0 bg-linear-to-r from-amber-500 to-white opacity-40 w-full h-full rounded-2xl'></div>
            <div className='hidden -translate-y-full group-hover:block group-hover:translate-y-0 transition duration-300 absolute top-0 left-0 bg-linear-to-b from-amber-500 to-white opacity-80 backdrop-blur-xs w-full h-full rounded-2xl'></div>

        </div>
    );
};

export default MealsCard;