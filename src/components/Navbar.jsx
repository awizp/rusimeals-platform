const Navbar = () => {
    return (
        <nav className="w-full py-5 px-3 md:px-0 bg-yellow-200 shadow">
            <div className="container mx-auto w-full flex justify-between items-center gap-3">

                <div className="w-fit overflow-hidden h-12">
                    <img src="/logo.png" alt="RusiMeals logo" className="w-full h-full object-cover" />
                </div>

                <form className="w-fit">
                    <input
                        type="text"
                        placeholder="Search your meals"
                        className="w-full outline-none bg-white px-3 py-1.5 rounded-full"
                    />
                </form>

            </div>
        </nav>
    );
};

export default Navbar;