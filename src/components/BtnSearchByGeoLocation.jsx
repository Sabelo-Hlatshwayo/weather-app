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
            className="block py-[12px] px-[22px] self-stretch cursor-pointer border-[1px] border-solid border-[#0a95c0] shadow-[0_2px_5px_0_rgba(0,0,0,0.15)] transition-all rounded-l-[100px]"
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
