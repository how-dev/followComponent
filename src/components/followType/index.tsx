import React from "react";
import { Props } from "../propType";
import "./index.css"


const FollowType:React.FC<Props> = ({ clicked }) => {
    return (
        <div className="container">
            <span>Seguindo</span>
            <div id={clicked ? "show" : "hide"}>

            </div>
        </div>
    )
}

export default FollowType
