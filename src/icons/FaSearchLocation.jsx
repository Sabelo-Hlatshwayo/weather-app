import React from "react";
import { FaSearchLocation as SearchLocation } from "react-icons/fa";
import { IconContext } from "react-icons";

function FaSearchLocation({ onHover }) {
    return (
        <IconContext.Provider
            value={{ color: onHover ? "#fff" : "#0a95c0", size: 20 }}
        >
            <div>
                <SearchLocation />
            </div>
        </IconContext.Provider>
    );
}

export default FaSearchLocation;
