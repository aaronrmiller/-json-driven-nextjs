const Dropdown = ({ label, id, options, value, changeHandler, name }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={changeHandler}>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Dropdown;
