import axios from "axios";

export const fetchRandomMeal = async () => {
    let mealsData;
    const URL = `${import.meta.env.VITE_MEALDB_BASE_URL}/random.php`;
    try {
        const res = await axios.get(URL);
        mealsData = res.data.meals[0];
    } catch (error) {
        throw new Error("failed to fetch random meal", error);
    }

    return { mealsData };
};

export const fetchCategories = async () => {
    let categoryData;
    const URL = `${import.meta.env.VITE_MEALDB_BASE_URL}/categories.php`;
    try {
        const res = await axios.get(URL);
        categoryData = res.data.categories;
    } catch (error) {
        throw new Error("failed to fetch categories", error);
    }

    return { categoryData };
};

export const fetchCategoryMeals = async (category) => {
    let mealsData;
    const URL = `${import.meta.env.VITE_MEALDB_BASE_URL}/filter.php?c=${category}`;
    try {
        const res = await axios.get(URL);
        mealsData = res.data.meals;
    } catch (error) {
        throw new Error("failed to fetch categorized meals", error);
    }

    return { mealsData };
};

export const fetchSearchMeals = async (search) => {
    let mealsData;
    const URL = `${import.meta.env.VITE_MEALDB_BASE_URL}/search.php?s=${search}`;
    try {
        const res = await axios.get(URL);
        mealsData = res.data.meals;
    } catch (error) {
        throw new Error("failed to fetch categorized meals", error);
    }

    return { mealsData };
};

export const fetchMealById = async (id) => {
    let meal;
    const URL = `${import.meta.env.VITE_MEALDB_BASE_URL}/lookup.php?i=${id}`;
    try {
        const res = await axios.get(URL);
        meal = res.data.meals[0];
    } catch (error) {
        throw new Error("failed to fetch categorized meals", error);
    }

    return { meal };
};