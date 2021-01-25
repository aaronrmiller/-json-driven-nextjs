export default {
    step1: [
        {
            id: 1,
            type: 'select',
            label: 'Country',
            options: ['USA', 'Germany', 'India'],
            value: 'USA',
            name: 'country'
        },
        {
            id: 2,
            type: 'select',
            label: 'State',
            options: ['California', 'Texas', 'Oregon'],
            value: 'Texas',
            name: 'state'
        },
        {
            id: 3,
            type: 'select',
            label: 'City',
            options: ['Austin', 'Houston', 'Waco'],
            value: 'Austin',
            name: 'city'
        }
    ],
    step2: [
        {
            id: 1,
            type: 'checkbox',
            name: 'terms-and-conditions',
            label: 'By checking this box you agree to the terms and conditions',
            value: false
        },
        {
            id: 2,
            type: 'checkbox',
            name: 'consent',
            label: 'By checking this box you give consent to share your personal information',
            value: false
        }
    ],
    step3: [
        {
            id: 1,
            type: 'text',
            label: 'First Name',
            name: 'firstName',
            value: ''
        },
        {
            id: 2,
            type: 'text',
            label: 'Last Name',
            name: 'lastName',
            value: ''
        }
    ]
};
