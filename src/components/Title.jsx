import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Title() {
    const { theme } = useTheme();

    const themeStyle = (theme) => {
        return {
            color: theme === "dark" ? "#fff" : "#000",
        };
    };

    return (
        <h1
            style={themeStyle(theme)}
            className="capitalize text-black text-3xl font-bold transition-all"
        >
            the weather app
        </h1>
    );
}

export default Title;
