import { useContext, useState, useEffect } from 'react';
import { MealsContext } from '../context/MealsContext';
import { useNavigate, useParams } from 'react-router';
import MealsCard from './MealsCard';
import { dublicateCheck } from '../utils/duplicateCheck';

const MealsList = () => {

    const { meals, handleCategoryChange } = useContext(MealsContext);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [limit, setLimit] = useState(12);
    const [countryData, setCountryData] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        handleCategoryChange(params.name);
    }, [params.name]);

    const filtered = () => {
        if (meals) {
            if (countryData == "") return meals;
            const updatedMeals = meals.filter(m => m.strCountry === countryData);
            return updatedMeals.length > 0 ? updatedMeals : meals;
        }
    };

    const filteredMeals = filtered();

    const visibleMeals = meals && filteredMeals.slice(0, limit);

    const { uniqueArray } = !meals ? [] : dublicateCheck(meals);
    const countries = uniqueArray;

    // loading another pair of cards
    const loadMoreMeals = () => {
        setLimit(prev => prev + 12);
    };

    // country filter function
    const handleFilter = (countryVal) => {
        setCountryData(countryVal);
        setIsCountryOpen(false);
    };


    return (
        !meals ? (
            <main className='w-full py-25 px-3'>
                <div className='w-full container mx-auto text-center space-y-10'>

                    <p className='font-chewy text-2xl'>No meals related {params.name} found!</p>

                    <button className='mx-auto bg-yellow-50/20 border-2 border-amber-600 text-amber-600 px-3 py-1 rounded-full cursor-pointer hover:shadow hover:bg-yellow-400/20 font-semibold flex gap-1 items-center'
                        onClick={() => navigate("/")}
                    >
                        <ion-icon name="home"></ion-icon> Home
                    </button>
                </div>
            </main>
        ) : (
            <main className='w-full px-3 py-10'>
                <div className='w-full container mx-auto space-y-10'>

                    <button className='bg-yellow-50/20 border-2 border-amber-600 text-amber-600 px-3 py-1 rounded-full cursor-pointer hover:shadow hover:bg-yellow-400/20 font-semibold flex gap-1 items-center'
                        onClick={() => navigate(-1)}
                    >
                        <ion-icon name="arrow-back"></ion-icon> back
                    </button>

                    <div className='font-chewy flex flex-col xs:flex-row justify-between items-center gap-5 relative z-20'>
                        <h3 className='text-2xl'>Meals for <span className='underline'>{params.name}</span></h3>

                        <div className="group relative">
                            <button className="text-lg cursor-pointer hover:text-zinc-500 flex items-center gap-1 transition-colors duration-300  outline-none"
                                onClick={() => setIsCountryOpen(prev => !prev)}
                            >
                                Country <ion-icon name="filter"></ion-icon>
                            </button>

                            <ul className={`absolute right-0 sm:right-5 ${isCountryOpen ? "block" : "hidden"} bg-white border border-black/5 rounded mt-1 w-48 ${countries.length > 4 ? "h-50 overflow-y-scroll" : "h-fit"} shadow-lg`}>
                                <li
                                    className={`px-4 py-2 hover:bg-yellow-400 cursor-pointer border-b border-black/5 focus:bg-yellow-400 ${countryData === "" ? "bg-yellow-200" : ""}`}
                                    onClick={() => handleFilter("")}
                                >
                                    All Countries
                                </li>
                                {
                                    countries &&
                                    countries.map((c, idx) => (
                                        <li
                                            className={`px-4 py-2 focus:bg-yellow-400 hover:bg-yellow-400 cursor-pointer border-b border-black/5 ${countryData === c.country ? "bg-yellow-200" : ""}`} key={idx}
                                            onClick={() => handleFilter(c.country)}
                                        >
                                            {c.country}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {
                        !meals.length === 0 &&
                        <p className='text-lg font-chewy text-center w-full'>No meals found!</p>
                    }

                    {/* meal items */}
                    <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 transition duration-300">
                        {
                            visibleMeals &&
                            visibleMeals.map((meal, idx) => (
                                <MealsCard key={idx} meal={meal} />
                            ))
                        }
                    </div>

                    {/* load more meals */}
                    {visibleMeals.length < limit ? "" :
                        <button className='border-2 mt-10 border-amber-600 text-amber-600 w-full rounded-xl cursor-pointer transition duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow flex items-center font-chewy gap-2 px-3 py-2 justify-center hover:bg-amber-400/5'
                            onClick={loadMoreMeals}
                        >
                            Load More <ion-icon name="add"></ion-icon>
                        </button>
                    }

                </div>
            </main>
        )
    );
};

export default MealsList;