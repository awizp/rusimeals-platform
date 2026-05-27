import { createContext, useEffect, useState } from "react";
import {
    fetchCategories,
    fetchCategoryMeals,
    fetchRandomMeal,
    fetchSearchMeals,
    fetchMealById
} from "../utils/fetchMeals.js";

const MealsContext = createContext();

const MealsProvider = ({ children }) => {

    const [randomMeal, setRandomMeal] = useState(null);
    const [categories, setCategories] = useState(null);
    const [searchedMeals, setSearchedMeals] = useState([]);
    const [meals, setMeals] = useState([]);
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        const getMealData = async () => {
            // random meal
            const { mealsData } = await fetchRandomMeal();
            setRandomMeal(mealsData);
        };

        getMealData();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            // categories
            const { categoryData } = await fetchCategories();
            setCategories(categoryData);
        };

        getCategories();
    }, []);

    //handle category change
    const handleCategoryChange = async (category) => {
        if (category) {
            const { mealsData } = await fetchCategoryMeals(category);
            setMeals(mealsData);
        }
    };

    // handle search change
    const handleSearchChange = async (searchTerm) => {
        if (searchTerm) {
            const { mealsData } = await fetchSearchMeals(searchTerm);
            setSearchedMeals(mealsData);
        }
    };

    // handle meal search by id
    const handleLookupMeal = async (mealId) => {
        if (mealId) {
            const { meal } = await fetchMealById(mealId);
            setMealData(meal);
        }
    };

    const values = {
        meals,
        mealData,
        randomMeal,
        categories,
        searchedMeals,
        handleCategoryChange,
        handleSearchChange,
        handleLookupMeal
    };

    return (
        <MealsContext.Provider value={values}>
            {children}
        </MealsContext.Provider>
    );
};

export { MealsContext, MealsProvider };