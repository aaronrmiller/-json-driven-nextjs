const { createContext, useReducer, useContext } = require('react');

const initialState = {};

const FormContext = createContext();

const reducer = (state, action) => {
    const { type, payload } = action;
    const { value, key, currentStep } = payload || {};
    const step = `step${currentStep}`;
    switch (type) {
        case 'CHANGE_SELECT':
            return {
                ...state,
                [step]: state[step].map((ele) => {
                    if (ele.id === parseInt(key)) {
                        ele.value = value;
                    }
                    return ele;
                })
            };
        case 'TOGGLE_CHECKBOX':
            return {
                ...state,
                [step]: state[step].map((ele) => {
                    if (ele.id === parseInt(key)) {
                        ele.value = !ele.value;
                    }
                    return ele;
                })
            };
        case 'CHANGE_INPUT':
            return {
                ...state,
                [step]: state[step].map((ele) => {
                    if (ele.id === parseInt(key)) {
                        ele.value = value;
                    }
                    return ele;
                })
            };
        case 'SET_GLOBAL_STATE':
            return {
                ...payload
            };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

const FormState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

export const useFormState = () => useContext(FormContext);

export default FormState;
