import { createContext, useEffect, useState } from "react";
import { randomMealFetch } from "../utils/fetchMeals.js";

const MealsContext = createContext();

const MealsProvider = ({ children }) => {

    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        const getMealData = async () => {
            const { mealsData } = await randomMealFetch();
            setRandomMeal(mealsData);
        };

        getMealData();
    }, []);

    return (
        <MealsContext.Provider value={{ randomMeal }}>
            {children}
        </MealsContext.Provider>
    );
};

export { MealsContext, MealsProvider };