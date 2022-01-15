import "./styles.scss"

function Display({operation, result}) {
    return (
        <div id="display-container">
            <p>{operation}</p>
            <p id="display">{result}</p>
        </div>
    )
}

export default Display
