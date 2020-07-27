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
                    
                    const [isAdmin , userObj] = response;
                   
                    context.login({
                        username: userObj.username,
                        userId: userObj._id
                    } , isAdmin)

                    const token = promise.headers.get('Authorization');
                    
                    document.cookie = `oreo=${token}`;
                    
                    props.history.push('/');
                }
                

            },

    register : async (event , props , state , context) => {
                    
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
                    const response = await promise.json();
                   
                    const [statusOfRegistration , userObj] = response;

                    if (statusOfRegistration) {
                        
                        const token = promise.headers.get('Authorization');
                    
                        document.cookie = `oreo=${token}`;

                        context.login({
                            username: userObj.username,
                            userId: userObj._id
                        })
                    
                        props.history.push('/');

                    }else {
                        alert('Invalid Credentials')
                        props.history.push('/register');
                    }

            },
};