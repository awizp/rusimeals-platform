import { useContext, useState } from 'react';
import { MealsContext } from '../context/MealsContext';
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {

    const { handleSearchChange } = useContext(MealsContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search === "") return;
        handleSearchChange(search.toLocaleLowerCase());
        navigate(`/search/${search}`);
        setSearch("");
    };

    return (
        <nav className="w-full py-5 px-3 md:px-0 bg-amber-300 shadow">
            <div className="container mx-auto w-full flex justify-between items-center gap-3">

                <NavLink to='/' className="w-fit overflow-hidden h-12">
                    <img src="/logo.png" alt="RusiMeals logo" className="w-full h-full object-cover" />
                </NavLink>

                <form className="w-fit" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Search your meals"
                        className="w-full outline-none bg-white px-3 py-1.5 rounded-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

            </div>
        </nav>
    );
};

export default Navbar;