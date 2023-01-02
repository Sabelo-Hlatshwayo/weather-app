import React, { useState, useRef } from "react";
import FaSearchLocation from "../icons/FaSearchLocation";
import { useTheme } from "../contexts/ThemeContext";

function BtnSearchByName() {
    const [onHover, setOnHover] = useState(false);
    const { theme } = useTheme();
    const thisButton = useRef(null);

    const themeStyle = (theme) => {
        return {
            backgroundColor: theme === "dark" ? "#2e3540" : "#f0f7f8",
        };
    };

    const handleHoverEnter = () => {
        setOnHover((prevState) => !prevState);
        thisButton.current.style.backgroundColor = "#0a95c0";
    };

    const handleHoverExit = () => {
        setOnHover((prevState) => !prevState);
        theme === "dark"
            ? (thisButton.current.style.backgroundColor = "#2e3540")
            : (thisButton.current.style.backgroundColor = "#f0f7f8");
    };

    return (
        <button
            className="button-2"
            onMouseEnter={() => handleHoverEnter()}
            onMouseLeave={() => handleHoverExit()}
            style={themeStyle(theme)}
            ref={thisButton}
        >
            <FaSearchLocation
                onHover={onHover}
                theme={theme}
            />
        </button>
    );
}

export default BtnSearchByName;
