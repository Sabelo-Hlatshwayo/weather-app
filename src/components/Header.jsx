import React from "react";

function Header() {
    return (
        <header className="header">
            <h1 className="capitalize text-3xl font-bold">the weather app</h1>

            <div className="form-dark">
                <form>
                    <button className="button-1"></button>
                    <input
                        type="text"
                        placeholder="Search City..."
                    />
                    <button className="button-2"></button>
                </form>
            </div>
        </header>
    );
}

export default Header;
