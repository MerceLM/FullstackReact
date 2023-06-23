import React from "react";
import Part from "./Part.jsx";

const Content = ({parts}) => (
    parts.map(part =>
        <Part key={part.id} part={part}  />
    )
)


export default Content