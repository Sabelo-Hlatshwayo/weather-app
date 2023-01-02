import React, { useState, useRef } from "react";
import TbLocationFilled from "../icons/TbLocationFilled";
import { useTheme } from "../contexts/ThemeContext";

function BtnSearchByGeoLocation() {
    const [onHover, setOnHover] = useState(false);
    const { theme } = useTheme();
    const thisButton = useRef(null);

    const themeStyle = (theme) => {
        return {
            backgroundColor: theme === "dark" ? "#2e3540" : "#f0f7f8",
        };
    };

    function handleHoverEnter() {
        setOnHover((prevState) => !prevState);
        thisButton.current.style.backgroundColor = "#0a95c0";
    }

    function handleHoverExit() {
        setOnHover((prevState) => !prevState);
        theme === "dark"
            ? (thisButton.current.style.backgroundColor = "#2e3540")
            : (thisButton.current.style.backgroundColor = "#f0f7f8");
    }

    return (
        <button
            className="button-1"
            onMouseEnter={() => handleHoverEnter()}
            onMouseLeave={() => handleHoverExit()}
            style={themeStyle(theme)}
            ref={thisButton}
        >
            <TbLocationFilled
                onHover={onHover}
                theme={theme}
            />
        </button>
    );
}

export default BtnSearchByGeoLocation;
