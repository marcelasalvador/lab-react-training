
function RandomNumber(pops) {
    function getRandomIntInclusive (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomInt1 = getRandomIntInclusive (1,6)
    let randomInt2 = getRandomIntInclusive (1,100)

    return (
        <div>
            <div>
                <p>Random value between 1 and 6 ={">"} {randomInt1} </p>  
            </div>

            <div>
                <p>Random value between 1 and 100 ={">"} {randomInt2} </p>
            </div>
        </div>
    )
}

export default RandomNumber