import "./styles.scss"
import {evaluate} from "mathjs"

function ButtonGrid({operation, setOperation, setResult}) {

    const append= (value, isOperator) => {
        if(isOperator && !operation.length){
            console.log("do nothing")
        }else{
            setOperation(prevState=>{
                return prevState+value
            })
        }
    }

    const clear = () => {
        setOperation("")
        setResult("")
    }
    
    const del = () => {
        setOperation(
            prevState=>prevState.slice(0,-1)
        )
    }
    

    return (
        <div id="buttonGrid">
            <button id="clear" className="wide" onClick={clear}>AC</button>
            <button id="delete" onClick={del} >DEL</button>
            <button id="divide" onClick={()=>append(" / ",true)}>%</button>
            
            <button id="seven" onClick={()=>append("7")}>7</button>
            <button id="eight" onClick={()=>append("8")}>8</button>
            <button id="nine" onClick={()=>append("9")}>9</button>
            <button id="multiply" onClick={()=>append(" * ",true)}>x</button>
            
            <button id="four" onClick={()=>append("4")}>4</button>
            <button id="five" onClick={()=>append("5")}>5</button>
            <button id="six" onClick={()=>append("6")}>6</button>
            <button id="subtract" onClick={()=>append(" - ",true)}>-</button>
            
            <button id="one" onClick={()=>append("1")}>1</button>
            <button id="two" onClick={()=>append("2")}>2</button>
            <button id="three" onClick={()=>append("3")}>3</button>
            <button id="add" onClick={()=>append(" + ",true)}>+</button>
            
            <button id="zero" onClick={()=>append("0")}>0</button>
            <button id="decimal" onClick={()=>append(".")}>.</button>
            <button id="equals" className="wide" onClick={()=>setResult(evaluate(operation))}>=</button>
            
        </div>
    )
}

export default ButtonGrid
