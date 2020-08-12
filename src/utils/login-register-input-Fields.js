const getInputFields = () => {

    const inputFields = {

        login: [
            {
                label: 'Username:',
                type: 'text',
                value: 'username'
            },

            {
                label: 'Password:',
                type: 'password',
                value: 'password'
            }
        ],

        register: [
            
            {
                label: 'Username:',
                type: 'text',
                value: 'username'
            },

            {
                label: 'Password:',
                type: 'password',
                value: 'password'
            },

            {
                label: 'Repeat Password:',
                type: 'password',
                value: 'rePassword'
            }
        ]

    };


    return inputFields

}

export default getInputFields;