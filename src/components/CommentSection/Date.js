import React,{useState} from "react";




const Date = props => {
    const styleDate = {marginLeft: "10px", textAlign:"left",lineHeight:"35px"}
    console.log("The props in Date.js ", props);
    const [date, setDate] = useState(props);
    return (
        <div style={styleDate}>{props.timestamp}</div>
    );
};

export default Date;