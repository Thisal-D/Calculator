import "../styles/CalculatorButtonPanel.css";
import CalculatorButton from './CalculatorButton';
import { 
    handleOperatorClick, 
    handleCommandClick, 
    handleNumberClick, 
    handleDecimalClick,
    handleSpecialOperatorClick
} from '../scripts/calculatorHandlers';


const buttonConfig = [
    [{ value: '%', onClick: handleOperatorClick, onClickArgs: "%" },
     { value: 'CE', onClick: handleCommandClick, onClickArgs: "CE" },
     { value: 'C', onClick: handleCommandClick, onClickArgs: "C" },
     { value: '⌫', onClick: handleCommandClick, onClickArgs: "⌫" }],
    [{ value: <span><sup>1</sup>/x</span>, onClick: handleSpecialOperatorClick, onClickArgs: "reciprocal" },
     { value: <span>x<sup>2</sup></span>, onClick: handleSpecialOperatorClick, onClickArgs: "sqr" }, 
     { value: <span><sup>2</sup>√x</span>, onClick: handleSpecialOperatorClick, onClickArgs: "sqrt" }, 
     { value: '÷', onClick: handleOperatorClick, onClickArgs: "÷" }],
    [{ value: '7', onClick: handleNumberClick, onClickArgs: "7" }, 
     { value: '8', onClick: handleNumberClick, onClickArgs: "8" }, 
     { value: '9', onClick: handleNumberClick, onClickArgs: "9" }, 
     { value: '×', onClick: handleOperatorClick, onClickArgs: "×" }],
    [{ value: '4', onClick: handleNumberClick, onClickArgs: "4" }, 
     { value: '5', onClick: handleNumberClick, onClickArgs: "5" }, 
     { value: '6', onClick: handleNumberClick, onClickArgs: "6" }, 
     { value: '-', onClick: handleOperatorClick, onClickArgs: "-" }],
    [{ value: '1', onClick: handleNumberClick, onClickArgs: "1" }, 
     { value: '2', onClick: handleNumberClick, onClickArgs: "2" }, 
     { value: '3', onClick: handleNumberClick, onClickArgs: "3" }, 
     { value: '+', onClick: handleOperatorClick, onClickArgs: "+" }],
    [{ value: <span><sup>+</sup>/-</span>, onClick: handleSpecialOperatorClick, onClickArgs: "+-" }, 
    { value: '0', onClick: handleNumberClick, onClickArgs: "0" }, 
    { value: '.', onClick: handleDecimalClick, onClickArgs: "." }, 
    { value: '=', onClick: handleOperatorClick, onClickArgs: "=" }]
];

const CalculatorButtonRow = ({ buttonsRow }) => (
    <tr>
        {buttonsRow.map((button) => (
            <td>
                <CalculatorButton buttonValue={button.value} onClick={button.onClick} onClickArgs={button.onClickArgs} />
            </td>
        ))}
    </tr>
);

const CalculatorButtonPanel = () => {
    return (
        <div>
            <table className="calculator-buttons-bg">
                <tbody>
                    {buttonConfig.map((buttonsRow) => (
                        <CalculatorButtonRow buttonsRow={buttonsRow} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalculatorButtonPanel;
