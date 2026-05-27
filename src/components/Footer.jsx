const Footer = () => {
    return (
        <footer className="w-full py-5 px-3">
            <div className="w-full container mx-auto text-center pt-5 border-t border-amber-600/10">
                <p className="font-semibold text-sm">
                    {new Date().getFullYear()} &copy; RusiMeals. Crafted by <a href="https://www.linkedin.com/in/awizp/" target="_blank" className="hover:underline">Vishnuprakash R</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;