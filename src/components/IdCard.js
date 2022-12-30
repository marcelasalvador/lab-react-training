function IdCard(props) {

    return (
        <div>
        <div>
            <img src={props.picture} alt="img"></img>
        </div>

        <div>
            <p><strong>First Name</strong>:<span> {props.firstName}</span></p>
            <p><strong>Last Name</strong>:<span> {props.lastName}</span></p>
            <p><strong>Gender</strong>:<span> {props.gender}</span></p>
            <p><strong>Height</strong>:<span> {props.height}</span></p>
            <p><strong>Birth</strong>:<span> {props.birth.toDateString()}</span></p>
        </div>
        </div>
    )
}

export default IdCard