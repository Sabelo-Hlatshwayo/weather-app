import React from "react";
import Header from "./components/Header";
import Location from "./components/Location";
import Date from "./components/Date";
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

                <div className="dashboard">
                    <div className="dashboard-primary">
                        <Location />
                        <Date />
                    </div>
                    <div className="dashboard-secondary">SECONDARY</div>
                </div>
            </div>
        </div>
    );
}

<Header />;

export default App;
