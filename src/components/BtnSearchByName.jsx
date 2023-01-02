import React, { useState } from "react";
import FaSearchLocation from "../icons/FaSearchLocation";

function BtnSearchByName() {
    const [onHover, setOnHover] = useState(false);

    return (
        <button
            className="button-2"
            onMouseEnter={() => setOnHover((prevState) => !prevState)}
            onMouseLeave={() => setOnHover((prevState) => !prevState)}
        >
            <FaSearchLocation onHover={onHover} />
        </button>
    );
}

export default BtnSearchByName;
