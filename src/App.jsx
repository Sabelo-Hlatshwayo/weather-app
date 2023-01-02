import React from "react";
import Header from "./components/Header";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
    return (
        <div className="container">
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </div>
    );
}

export default App;
