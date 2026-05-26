import { useNavigate } from "react-router";

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <section className="w-full h-dvh overflow-hidden relative">

            <div className="w-full h-full container mx-auto flex flex-col justify-center items-center gap-10 p-35 capitalize font-chewy">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">404 Page not found!</h2>
                <p className="text-lg">Searching for food?</p>
                <button className="border-2 border-black rounded-full shadow hover:shadow-lg hover:bg-black/10 cursor-pointer px-3 py-2 flex items-center gap-2 hover:border-amber-600 hover:text-white transition duration-300 hover:-translate-y-0.5"
                    onClick={() => navigate("/")}
                >
                    <ion-icon name="home"></ion-icon> Back to Home
                </button>
            </div>

            <div className="w-full inset-0 absolute top-0 left-0 overflow-hidden -z-20">
                <img
                    src="/page-not-found.jpg"
                    alt="Page Not Found image"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='absolute top-0 left-0 backdrop-blur-sm bg-black opacity-0 w-full h-full -z-10'></div>
            <div className='absolute top-0 left-0 bg-linear-to-b from-amber-600 to-white opacity-70 w-full h-full -z-10'></div>
            <div className='absolute top-0 left-0 bg-linear-to-r from-amber-600 to-white opacity-85 w-full h-full -z-10'></div>

        </section>
    );
};

export default PageNotFound;