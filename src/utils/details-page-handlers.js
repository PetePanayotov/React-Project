const like = async (history , carId , userId) => {

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
    
        const promise  = await fetch(url , headerObj);
    
        if (promise.status === 200) {
            history.goBack();
            
            setTimeout(() => {
                history.goForward()
            } , 3)
        };
    
        history.replace(`/details?id=${carId}`);
};


const dislike = async (history, carId , userId) => {

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

        const promise = await fetch(url , headerObj);

        if (promise.status === 200) {
            history.goBack();

            setTimeout(() => {
                history.goForward()
            } , 3)
        };
    
};


const deleteCar = async (history , carId) => {
    
        const url = `http://localhost:9999/api/car/${carId}`;
        await fetch(url , {method: "DELETE"});
        history.push('/home');
};


const comment = async (event , history ,carId , username) => {

        const parent = event.target.parentNode.parentNode;
        const textArea = parent.querySelector('#textArea');
        const comment = textArea.value;
        const timeString = new Date().toString();
        const [time, ] = timeString.split('G');

        const data = {
            carId,
            username,
            comment,
            time
        }
        const url = `http://localhost:9999/api/car/comment/${carId}`;

        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const promise = await fetch(url , headerObj);

        if (promise.status === 200) {
            history.goBack();

            setTimeout(() => {
                history.goForward()
            } , 3)
        };

}


const removeComment = async (history ,carId , string) => {

        const url = `http://localhost:9999/api/car/remove-comment/${carId}`;
        const data = {comment: string};

        const headerObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const promise = await fetch(url , headerObj);

        if (promise.status === 200) {

            history.goBack();

            setTimeout(() => {
                history.goForward()
            } , 3)
        };
    
};

export default {
    like,
    dislike,
    deleteCar,
    comment,
    removeComment
};