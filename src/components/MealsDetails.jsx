import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MealsContext } from "../context/MealsContext";

const MealsDetails = () => {

    const { mealData, handleLookupMeal } = useContext(MealsContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const handleSpecificMeal = () => {
            handleLookupMeal(params.id);
        };
    }, [params.id]);

    return (
        <>
            {
                !mealData ? (
                    <main className='w-full py-25 px-3'>
                        <div className='w-full container mx-auto text-center space-y-10'>

                            <p className='font-chewy text-2xl'>No such meal exist!</p>

                            <button className='mx-auto bg-yellow-50/20 border-2 border-amber-600 text-amber-600 px-3 py-1 rounded-full cursor-pointer hover:shadow hover:bg-yellow-400/20 font-semibold flex gap-1 items-center'
                                onClick={() => navigate("/")}
                            >
                                <ion-icon name="home"></ion-icon> Home
                            </button>
                        </div>
                    </main>
                ) : (
                    <section className="w-full py-5 px-3">
                        <div className="container w-full mx-auto space-y-10">

                            <button className='bg-yellow-50/20 border-2 border-amber-600 text-amber-600 px-3 py-1 rounded-full cursor-pointer hover:shadow hover:bg-yellow-400/20 font-semibold flex gap-1 items-center'
                                onClick={() => navigate(-1)}
                            >
                                <ion-icon name="arrow-back"></ion-icon> back
                            </button>

                            <div className="w-full space-y-3">
                                <p className="font-bold text-gray-700">
                                    {mealData.strCategory} | {mealData.strArea ? mealData.strArea : mealData.strCountry}
                                </p>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-chewy">{mealData.strMeal}</h2>
                            </div>

                            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-15 p-3 xs:p-5 sm:p-10 relative">
                                {/* meal image */}
                                <div className="overflow-hidden rounded-2xl w-full sm:w-[80%] md:w-[65%] lg:w-[55%] h-full group">
                                    <img
                                        src={mealData.strMealThumb}
                                        alt={mealData.strMeal}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                {/* meal ingredients */}
                                <div className="w-full space-y-5">
                                    <h3 className="text-gray-700 font-chewy text-lg">For this meal</h3>

                                    <table className="w-full border-2">
                                        <thead className="font-chewy">
                                            <tr>
                                                <td className="p-1 text-center text-amber-700 text-lg">S.No</td>
                                                <td className="p-1 text-center text-amber-700 text-lg">Ingredients</td>
                                                <td className="p-1 text-center text-amber-700 text-lg">Measurement</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((index, i) => {
                                                const ingredient = mealData[`strIngredient${index}`];
                                                const measure = mealData[`strMeasure${index}`];

                                                return ingredient ? (
                                                    <tr key={i}>
                                                        <td className="p-1 text-center border font-semibold">{index}</td>
                                                        <td className="p-1 text-center border font-semibold">{ingredient}</td>
                                                        <td className="p-1 text-center border font-semibold">{measure}</td>
                                                    </tr>
                                                ) : null;
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* overlay */}
                                <div className='transition duration-300 absolute top-0 left-0 bg-linear-to-r from-amber-500 to-white opacity-40 w-full h-full rounded-2xl -z-10'></div>
                                <div className='transition duration-300 absolute top-0 left-0 bg-linear-to-b from-amber-500 to-white opacity-80 backdrop-blur-xs w-full h-full rounded-2xl -z-10'></div>
                            </div>

                            {/* instructions */}
                            <div className="w-full space-y-5 p-3 xs:p-5 sm:p-10">
                                <h3 className="text-xl font-chewy">Instructions</h3>

                                <div className="space-y-3 font-semibold">
                                    {
                                        mealData.strInstructions.includes("\r\n") ?
                                            mealData.strInstructions.split("\r\n").map((word, idx) => (
                                                <p key={idx}>{word}</p>
                                            )) :
                                            mealData.strInstructions.split(". ").map((word, idx) => (
                                                <p key={idx}>{word}</p>
                                            ))
                                    }
                                </div>
                            </div>

                            {/* youtube video */}
                            <div className="w-full px-3 xs:px-5 sm:px-10">
                                {
                                    mealData.strYoutube ? (
                                        <a href={mealData.strYoutube} target="_blank"
                                            className="bg-red-500 text-white px-3 py-2 cursor-pointer font-chewy flex items-center gap-1 transition hover:bg-red-600 duration-300 rounded-full hover:shadow w-fit hover:-translate-y-0.5"
                                        >
                                            <ion-icon name="play-circle"></ion-icon> Watch
                                        </a>
                                    ) : (
                                        mealData.strSource ? (
                                            <a href={mealData.strSource} target="_blank"
                                                className="font-chewy text-lg text-white transition hover:shadow px-3 py-2 rounded-full cursor-pointer bg-black w-fit duration-300 hover:-translate-y-0.5">
                                                Source
                                            </a>
                                        ) : ""
                                    )
                                }
                            </div>

                        </div>
                    </section>
                )
            }
        </>
    );
};

export default MealsDetails;