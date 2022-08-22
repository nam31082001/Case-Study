import React from "react"

const Paging = ({ paging, arrNumber,  }) => {
    const handleClick=(number)=>{
        paging(number)
        window.scrollTo(0, 0);
    }

    return (
        <>
            {arrNumber.map(number => {
                return (
                    <button onClick={() => handleClick(number)}>{number}</button>
                )

            })}
    
        </>

    )
}
export default Paging