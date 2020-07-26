export default {  
    
    login:  async (event , props , state , context) => {

                event.preventDefault();
                console.log(context);
                const url = 'http://localhost:9999/api/user/login';
                
                const {username , password} = state;
              
                const data = {username , password};
                
                const headerObj = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
                const promise = await fetch(url , headerObj);
                const response = await promise.json();
               
                if (response) {
                    
                    context.login({
                        username: response.username,
                        userId: response._id
                    })

                    const token = promise.headers.get('Authorization');
                    
                    document.cookie = `oreo=${token}`;
                    
                    props.history.push('/');
                }
                

            },

    register : async (event , props , state) => {
                    
                    event.preventDefault();

                    const url = 'http://localhost:9999/api/user/register';

                    const {username , password} = state;

                    const data = {username , password};

                    const headerObj = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    };
                
                
                    const promise = await fetch(url , headerObj);
                
                    const token = promise.headers.get('Authorization');
                
                    document.cookie = `oreo=${token}`;
                
                    const response = await promise.json();
                
                    props.history.push('/');
            },
};