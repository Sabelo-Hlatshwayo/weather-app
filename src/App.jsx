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
            <div className="container max-w-[1140px] my-0 mx-auto">
                <Header />
            </div>

            <div className="dashboard"></div>
        </div>
    );
}

<Header />;

export default App;
