import React, { useState } from "react";
import TbLocationFilled from "../icons/TbLocationFilled";

function BtnSearchByGeoLocation() {
    const [onHover, setOnHover] = useState(false);

    return (
        <button
            className="button-1"
            onMouseEnter={() => setOnHover((prevState) => !prevState)}
            onMouseLeave={() => setOnHover((prevState) => !prevState)}
        >
            <TbLocationFilled onHover={onHover} />
        </button>
    );
}

export default BtnSearchByGeoLocation;
