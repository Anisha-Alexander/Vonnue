import React from "react"


function Person({person}){
    return(
        <div>
            <h2>
            I am {person.name} who is {person.age} years old.
            </h2>
        </div>
    )
}

export default Person 