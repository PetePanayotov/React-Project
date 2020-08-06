export default {
    like: async (props, carId , userId) => {

        const url = `http://localhost:9999/api/car/like/${carId}`;
        
        const data = {
            userId
        }
        
        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(url , headerObj);

        props.history.push('/home');

    },

    dislike : async (props, carId , userId) => {

        const url = `http://localhost:9999/api/car/dislike/${carId}`;
        
        const data = {
            userId
        }
        
        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(url , headerObj);

        props.history.push('/home');

    },

    delete: async (props , carId) => {
        
        const url = `http://localhost:9999/api/car/${carId}`;

        await fetch(url , {method: "DELETE"});

        props.history.push('/home');
    }
}