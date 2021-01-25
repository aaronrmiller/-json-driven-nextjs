const Input = ({ label, id, value, name, changeHandler }) => {
    return (
        <>
            <label>{label}</label>
            <input id={id} value={value} name={name} onChange={changeHandler} />
        </>
    );
};

export default Input;
