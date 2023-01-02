import React from "react";
import { FaSearchLocation as SearchLocation } from "react-icons/fa";
import { IconContext } from "react-icons";

function FaSearchLocation() {
    return (
        <IconContext.Provider value={{ color: "#0a95c0", size: 20 }}>
            <div>
                <SearchLocation />
            </div>
        </IconContext.Provider>
    );
}

export default FaSearchLocation;
