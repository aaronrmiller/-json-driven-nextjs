import { useState, useEffect } from 'react';
import Checkbox from '../components/checkbox';
import Dropdown from '../components/dropdown';
import { useFormState } from '../components/formState';
import Input from '../components/input';
import { Components } from '../component.constants';
import JSONTree from 'react-json-tree';
import useSWR from 'swr';

const elmFactory = ({ elmProps, changeSelect, toggleCheckbox, changeInput }) => {
    return (
        elmProps &&
        elmProps.length &&
        elmProps.map((prop, idx) => {
            const element = {
                checkbox: <Checkbox {...prop} key={idx} clickHandler={(e) => toggleCheckbox(e)} />,
                text: <Input {...prop} key={idx} changeHandler={(e) => changeInput(e)} />,
                select: <Dropdown {...prop} key={idx} changeHandler={(e) => changeSelect(e)} />
            };
            return element[prop.type];
        })
    );
};
const updateDB = async (formData) => {
    await fetch(`/api/testIsd`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(formData)
    });
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
    const formData = await fetcher('http://localhost:3000/api/testIsd');
    return { props: formData };
}
export default function Test(props) {
    const [currentStep, nextStep] = useState(1);
    const { state, dispatch } = useFormState();
    const { data, mutate } = useSWR('/api/testIsd', fetcher, { initialData: props.formData });
    useEffect(() => {
        dispatch({
            type: 'SET_GLOBAL_STATE',
            payload: data
        });
    }, [data]);

    const toggleCheckbox = (e) => {
        dispatch({
            type: Components.TOGGLE_CHECKBOX,
            payload: {
                value: e.target.value,
                currentStep: currentStep,
                key: e.target.id
            }
        });
    };

    const changeSelect = (e) => {
        dispatch({
            type: Components.CHANGE_SELECT,
            payload: {
                value: e.target.value,
                currentStep: currentStep,
                key: e.target.id
            }
        });
    };

    const changeInput = (e) => {
        dispatch({
            type: Components.CHANGE_INPUT,
            payload: {
                value: e.target.value,
                currentStep: currentStep,
                key: e.target.id
            }
        });
    };

    const stateKeys = Object.keys(state);
    const totalSteps = stateKeys.length;
    const FormComponents = elmFactory({
        elmProps: state[`step${currentStep}`],
        changeSelect,
        toggleCheckbox,
        changeInput
    });

    const stepHandler = () => {
        nextStep(currentStep + 1);
        updateDB(state);
        mutate(state);
    };
    return (
        <>
            {currentStep !== totalSteps ? (
                <>
                    {FormComponents}
                    <button onClick={stepHandler}>Next Step</button>
                </>
            ) : (
                <JSONTree data={state} />
            )}
        </>
    );
}
