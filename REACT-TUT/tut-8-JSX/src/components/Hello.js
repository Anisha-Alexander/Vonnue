import React from 'react'

export const Hello = () => {
    // return(
    //     <div>
    //         <h1>Heyy Honneey !!!!</h1>
    //     </div>
    // )
    // using jsx

    return React.createElement(
    'div',
    {id:'he',className:'dummmy'},
    React.createElement('h1',null,'hey Honey'))
}

// export default Hello; 