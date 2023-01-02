import React from "react";
import { FaSearchLocation as SearchLocation } from "react-icons/fa";
import { IconContext } from "react-icons";

function FaSearchLocation({ onHover, theme }) {
    const themeStyle = (theme, onHover) =>
        theme === "dark"
            ? { color: (onHover || !onHover) && "#f6f7fa", size: 20 }
            : { color: onHover ? "#f6f7fa" : "#0a95c0", size: 20 };

    return (
        <IconContext.Provider value={themeStyle(theme, onHover)}>
            <div>
                <SearchLocation />
            </div>
        </IconContext.Provider>
    );
}

export default FaSearchLocation;
