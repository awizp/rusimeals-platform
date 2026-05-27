import { useContext } from 'react';

import { MealsContext } from '../context/MealsContext';
import { useNavigate } from 'react-router';

const Hero = () => {

    const { randomMeal, handleLookupMeal } = useContext(MealsContext);
    const navigate = useNavigate();

    const handleRecipeLookup = (mealId) => {
        handleLookupMeal(mealId);
        navigate(`/meal/${mealId}`);
    };

    return (
        <section className='w-full px-3 py-5'>
            <div className="w-full container overflow-hidden mx-auto shadow-lg rounded-4xl">

                <div className='w-full relative overflow-hidden p-10'>

                    {/* meals details */}
                    <div className='w-full sm:w-lg md:w-xl lg:w-3xl space-y-5'>
                        {
                            randomMeal && (
                                <>
                                    <p className='font-bold'>
                                        {randomMeal.strCategory} | {randomMeal.strArea ? randomMeal.strArea : randomMeal.strCountry}
                                    </p>
                                    <h2 className='text-5xl font-chewy'>{randomMeal.strMeal}</h2>
                                    <div className='space-y-2 text-sm text-gray-700'>
                                        <h3 className='font-chewy'>Instructions</h3>
                                        <p className='font-semibold text-gray-700'>{randomMeal.strInstructions.slice(0, 250)}...</p>
                                    </div>
                                    {
                                        randomMeal.strTags && (
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                {randomMeal.strTags.split(",").map((tag, idx) => (
                                                    <span key={idx} className='bg-amber-600 px-3 py-1.5 rounded-full shadow text-white text-xs font-semibold'>{tag}</span>
                                                ))}
                                            </div>
                                        )
                                    }
                                    <div className='flex gap-3 mt-10 flex-wrap'>
                                        <button
                                            onClick={() => handleRecipeLookup(randomMeal.idMeal)}
                                            className='w-full sm:w-fit bg-zinc-950 font-chewy text-lg hover:bg-black font-semibold hover:shadow hover:-translate-y-0.5 transition duration-300 cursor-pointer px-3 py-2 rounded-full flex gap-1 items-center justify-center text-white'>
                                            View <ion-icon name="information-circle"></ion-icon>
                                        </button>
                                        <a
                                            href={randomMeal.strSource}
                                            target="_blank" className='w-full font-chewy text-lg sm:w-fit border bg-amber-300 border-zinc-950 hover:border-black font-semibold hover:shadow hover:-translate-y-0.5 transition duration-300 cursor-pointer px-3 py-2  rounded-full flex gap-1 items-center text-black justify-center'>
                                            Source
                                        </a>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className='flex justify-center items-center w-full h-full absolute top-0 left-0 -z-20'>
                        {/* hero image */}
                        <div className='w-full h-full overflow-hidden'>
                            {
                                randomMeal &&
                                <img
                                    src={randomMeal.strMealThumb}
                                    alt={randomMeal.strMeal}
                                    className='w-full h-full object-cover'
                                />
                            }
                        </div>
                    </div>

                    {/* overlay divs */}
                    <div className='absolute top-0 left-0 backdrop-blur-xs bg-black opacity-0 w-full h-full -z-10'></div>
                    <div className='absolute top-0 left-0 bg-linear-to-b from-amber-300 to-white opacity-80 w-full h-full -z-10'></div>
                    <div className='absolute top-0 left-0 bg-linear-to-r from-amber-300 to-white opacity-85 w-full h-full -z-10'></div>

                </div>

            </div>
        </section>
    );
};

export default Hero;