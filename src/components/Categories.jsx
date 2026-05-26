import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { useNavigate } from 'react-router';

const Categories = () => {

    const { categories, handleCategoryChange } = useContext(MealsContext);
    const navigate = useNavigate();

    const handleSubmit = (category) => {
        navigate(`/category/${category}`);
        handleCategoryChange(category);
    };

    return (
        <section className='w-full px-3 py-5'>
            <div className='w-full container mx-auto flex flex-col justify-center items-center gap-10'>

                <h2 className='font-chewy text-xl'>Meals Categories</h2>

                <div className='w-full flex flex-wrap justify-center gap-10 items-center'>
                    {
                        categories &&
                        categories.map((c, idx) => (
                            <div
                                key={idx}
                                className='flex flex-col gap-3 items-center justify-center cursor-pointer group'
                                onClick={() => handleSubmit(c.strCategory)}
                            >
                                <div className='w-20 h-20 overflow-hidden rounded-full group-hover:scale-90 group-hover:shadow-lg group-hover:shadow-amber-400 transition duration-300'>
                                    <img src={c.strCategoryThumb} alt={c.strCategory}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <p className='font-semibold text-sm group-hover:underline transition duration-300'>{c.strCategory}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Categories;