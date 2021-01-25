const Checkbox = ({ label, id, name, value, clickHandler }) => {
    return (
        <>
            <label>{label}</label>
            <input
                id={id}
                name={name}
                type="checkbox"
                defaultChecked={value}
                onClick={clickHandler}
            />
        </>
    );
};

export default Checkbox;
