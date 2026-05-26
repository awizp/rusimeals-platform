import axios from "axios";

export const randomMealFetch = async () => {
    let mealsData;
    const URL = import.meta.env.VITE_MEALDB_RANDOM_URL;
    try {
        const res = await axios.get(URL);
        mealsData = res.data.meals[0];
    } catch (error) {
        throw new Error("failed to fetch random meal", error);
    }

    return { mealsData };
};