import React, { useState } from "react";
import BtnSearchByGeoLocation from "./BtnSearchByGeoLocation";
import BtnSearchByName from "./BtnSearchByName";
import ThemeToggler from "./ThemeToggler";

function Header() {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme((prevState) => !prevState);

    console.log(darkTheme);

    return (
        <header className="header">
            <h1 className="capitalize text-3xl font-bold">the weather app</h1>

            <div className="form-dark">
                <form>
                    <BtnSearchByGeoLocation />
                    <input
                        type="text"
                        placeholder="Search City..."
                    />
                    <BtnSearchByName />
                </form>
            </div>
            <ThemeToggler
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
            />
        </header>
    );
}

export default Header;
