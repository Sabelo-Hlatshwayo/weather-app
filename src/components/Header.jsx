import React from "react";
import TbLocationFilled from "../icons/TbLocationFilled";
import FaSearchLocation from "../icons/FaSearchLocation";

function Header() {
    return (
        <header className="header">
            <h1 className="capitalize text-3xl font-bold">the weather app</h1>

            <div className="form-dark">
                <form>
                    <button className="button-1">
                        <TbLocationFilled />
                    </button>
                    <input
                        type="text"
                        placeholder="Search City..."
                    />
                    <button className="button-2">
                        <FaSearchLocation />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
