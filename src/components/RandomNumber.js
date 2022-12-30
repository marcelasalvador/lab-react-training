import { useState } from "react"



function RandomNumber(props) {
    function getRandomIntInclusive (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomInt1 = getRandomIntInclusive (1,6)


    return (
        <div>
            <div>
            
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default RandomNumber