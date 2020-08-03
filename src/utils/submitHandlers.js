export default {  
    
    login:  async (event , props , state , context) => {

                event.preventDefault();
                
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
                    
                    props.history.push('/home');
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

                    const token = promise.headers.get('Authorization');
                
                    document.cookie = `oreo=${token}`;
                    context.login({
                        username: response.username,
                        userId: response._id
                    })
                
                    props.history.push('/home');

            },

            create: async (event,state , props) => {
                event.preventDefault();
                const url = 'http://localhost:9999/api/car/';
                const {brand ,model , price , imageUrl , description , isVipOffer , specifications} = state;
                
                const data = { 
                               brand,
                               model,
                               price,
                               imageUrl, 
                               description, 
                               isVipOffer, 
                               specifications
            
                };
            
                const headerObj = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
            
                const promise = await fetch(url , headerObj);
                
                if (promise.status === 200) {
                    props.history.push('/home')
                };
               
            },
};