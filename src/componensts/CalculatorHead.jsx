import "../styles/CalculatorHead.css"

 
const CalculatorHead = () => {
    return(
        <div className="calculator-head-bg">
            <div className="calculator-final-histroy-bg">
                <p className="calculator-final-histroy" id="calculator-final-histroy"></p>
            </div>
            <input className="calculator-head-input" id="calculator-head-input"></input>
        </div>
    );
}

export default CalculatorHead;