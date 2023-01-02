import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();

    const themeStyle = (theme) => {
        return {
            backgroundColor: theme === "dark" ? "#fff" : "#86b7fe",
            transform: theme === "dark" ? "translateX(100%)" : "translateX(0)",
        };
    };

    return (
        <div
            className="toggle"
            onClick={() => toggleTheme(theme)}
            style={{
                backgroundColor: theme === "dark" ? "#0a95c0" : "#f0f7f8",
            }}
        >
            <div
                className="toggle-ball"
                style={themeStyle(theme)}
            ></div>
        </div>
    );
}

export default ThemeToggler;
