import React from "react";
import { TbLocationFilled as LocationFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

function TbLocationFilled() {
    return (
        <IconContext.Provider value={{ color: "#0a95c0", size: 20 }}>
            <div>
                <LocationFilled />
            </div>
        </IconContext.Provider>
    );
}

export default TbLocationFilled;
