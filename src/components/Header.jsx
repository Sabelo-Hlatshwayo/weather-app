import React from "react";
import BtnSearchByGeoLocation from "./BtnSearchByGeoLocation";
import BtnSearchByName from "./BtnSearchByName";
import ThemeToggler from "./ThemeToggler";

function Header() {
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
            <ThemeToggler />
        </header>
    );
}

export default Header;
