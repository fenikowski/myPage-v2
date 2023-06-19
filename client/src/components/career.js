import React from "react";
import "./style/career.css"
import Achievment from "./achievment";

const someRandomText = "assadd aasdasd aasds asd asdsad wqedwfs dfsdf sdf"

class Career extends React.Component {

    render(){
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
        )
    }
};

export default Career;