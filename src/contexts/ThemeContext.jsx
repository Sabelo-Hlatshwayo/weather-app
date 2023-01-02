import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = (theme) =>
        theme === "dark" ? setTheme(() => "light") : setTheme(() => "dark");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
