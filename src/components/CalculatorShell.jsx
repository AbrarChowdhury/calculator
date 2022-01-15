import { useState } from "react"
import "./styles.scss"
import Display from "./Display"
import ButtonGrid from "./ButtonGrid"
import { evaluate } from "mathjs"

function CalculatorShell() {
    const [operation, setOperation] = useState("")
    const [result, setResult] = useState("")

    return (
        <div id="shell">
            <Display operation={operation} result={result}/>
            <ButtonGrid setOperation={setOperation} operation={operation} setResult={setResult}/>
        </div>
    )
}

export default CalculatorShell
