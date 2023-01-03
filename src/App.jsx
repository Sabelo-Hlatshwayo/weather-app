import React from "react";
import Header from "./components/Header";
import { useTheme } from "./contexts/ThemeContext";

function App() {
    const { theme } = useTheme();

    const themeStyle = (theme) => {
        return {
            backgroundColor: theme === "dark" ? "#242226" : "#e7edfa",
        };
    };

    return (
        <div
            className="overall-container"
            style={themeStyle(theme)}
        >
            <div className="container">
                <Header />
            </div>
        </div>
    );
}

<Header />;

export default App;
