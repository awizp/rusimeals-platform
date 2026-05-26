import { createContext } from "react";

const MealsContext = createContext();

const MealsProvider = ({ children }) => {
    return (
        <MealsContext.Provider value={{}}>
            {children}
        </MealsContext.Provider>
    );
};

export { MealsContext, MealsProvider };