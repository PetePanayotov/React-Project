const getInputFields = (page) => {

    const inputFields = {

        login: [
            {
                label: 'Username:',
                type: 'text',
                value: 'username',
                key: '1'
               
            },

            {
                label: 'Password:',
                type: 'password',
                value: 'password',
                key: '2'
            }
        ],

        register: [
            
            {
                label: 'Username:',
                type: 'text',
                value: 'username',
                key: '1'
            },

            {
                label: 'Password:',
                type: 'password',
                value: 'password',
                key: '2'
            },

            {
                label: 'Repeat Password:',
                type: 'password',
                value: 'rePassword',
                key: '3'
            }
        ]

    };


    return inputFields

}

export default getInputFields;