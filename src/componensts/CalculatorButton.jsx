import '../styles/CalculatorButton.css';


const CalculatorButton = ({buttonValue, onClick, onClickArgs}) => {
    return (
        <button className='calculator-btn' onClick={() => onClick(onClickArgs)}>
            {buttonValue}
        </button>
    );
}

export default CalculatorButton;