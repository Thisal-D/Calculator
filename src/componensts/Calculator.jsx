import '../styles/Calculator.css';
import CalculatorHead from './CalculatorHead';
import CalculatorButtonPanel from './CalculatorButtonPanel';


const Calculator = () => {
    return(
        <div className='calculator-main-bg'>
            <CalculatorHead/>
            <CalculatorButtonPanel/>
        </div>
    );
}

export default Calculator;