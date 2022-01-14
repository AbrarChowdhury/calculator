import "./styles.scss"

function Display({opperation, result}) {
    return (
        <div id="display-container">
            <p>{opperation}</p>
            <p id="display">{result}</p>
        </div>
    )
}

export default Display
