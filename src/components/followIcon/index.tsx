import React from "react";
import { Props } from "../propType";
import "./index.css"

const FollowIcon: React.FC<Props> = ({ clicked }) => {
    return (
        <div className="circleFollow">
            <div id={clicked ? "xFollowClicked" : "xFollow"}>

            </div>
            <div id={clicked ? "yFollowClicked" : "yFollow"}>

            </div>
        </div>
    )
}

export default FollowIcon
