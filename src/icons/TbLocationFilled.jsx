import React from "react";
import { TbLocationFilled as LocationFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

function TbLocationFilled({ onHover }) {
    return (
        <IconContext.Provider
            value={{ color: onHover ? "#fff" : "#0a95c0", size: 20 }}
        >
            <div>
                <LocationFilled />
            </div>
        </IconContext.Provider>
    );
}

export default TbLocationFilled;
