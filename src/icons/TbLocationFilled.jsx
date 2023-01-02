import React from "react";
import { TbLocationFilled as LocationFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

function TbLocationFilled({ onHover, theme }) {
    const themeStyle = (theme, onHover) =>
        theme === "dark"
            ? { color: (onHover || !onHover) && "#f6f7fa", size: 20 }
            : { color: onHover ? "#f6f7fa" : "#0a95c0", size: 20 };

    return (
        <IconContext.Provider value={themeStyle(theme, onHover)}>
            <div>
                <LocationFilled />
            </div>
        </IconContext.Provider>
    );
}

export default TbLocationFilled;
