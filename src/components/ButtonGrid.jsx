import "./styles.scss"

function ButtonGrid() {
    return (
        <div id="buttonGrid">
            <button id="clear" className="wide">AC</button>
            <button id="history">H</button>
            <button id="divide">%</button>
            
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="multiply">x</button>
            
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="subtract">-</button>
            
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="add">+</button>
            
            <button id="">0</button>
            <button id="decimal">.</button>
            <button id="equals" className="wide">=</button>
            
        </div>
    )
}

export default ButtonGrid
