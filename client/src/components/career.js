import React from "react";
import "./style/career.css";
import Achievment from "./achievment";

export default function Career() {
    const someRandomText = "assadd aasdasd aasds asd asdsad wqedwfs dfsdf sdf";
    return (
        <div className="career">
            <div className="left">
                <div className="column">
                    <Achievment text={someRandomText} />
                </div>
            </div>
            <div className="separator"/>
            <div className="right">

            </div>
        </div>
    );
};