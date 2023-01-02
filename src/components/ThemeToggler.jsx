import React from "react";

function ThemeToggler({ darkTheme, toggleTheme }) {
    const theme = () => {
        return {
            backgroundColor: darkTheme ? "#fff" : "#86b7fe",
            transform: darkTheme ? "translateX(100%)" : "translateX(0)",
        };
    };

    return (
        <div
            className="toggle"
            onClick={toggleTheme}
            style={{ backgroundColor: darkTheme ? "#0a95c0" : "#f0f7f8" }}
        >
            <div
                className="toggle-ball"
                style={theme()}
            ></div>
        </div>
    );
}

export default ThemeToggler;
