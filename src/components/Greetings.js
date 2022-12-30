function Greetings(props){
    let greeting = "hello"

    if (props.lang === "fr") {
        greeting = "bonjour"
    } else if (props.lang === "de") {
        greeting = "hallo"
    } else if (props.lang ==="es") {
        greeting ="hola"
    } else if (props.lang === "en") {
        greeting = "hello"
    }
    

    return (

        <div>
            <div>
              {greeting} {props.children}
            </div>

        </div>
    )
}

export default Greetings