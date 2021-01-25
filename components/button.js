const Button = ({ type = 'button', clickHandler, value }) => {
    return (
        <button type={type} onClick={clickHandler}>
            {value}
        </button>
    );
};

export default Button;
