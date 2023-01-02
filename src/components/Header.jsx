import React, { useContext, useState } from "react";
import Title from "./Title";
import BtnSearchByGeoLocation from "./BtnSearchByGeoLocation";
import BtnSearchByName from "./BtnSearchByName";
import ThemeToggler from "./ThemeToggler";

function Header() {
    return (
        <header className="header">
            <Title />
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
