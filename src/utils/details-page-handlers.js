const like = async (carId , userId , isLiked ,setIsLiked) => {

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
            setIsLiked(!isLiked)
        };
    
};


const dislike = async (carId , userId , isLiked , setIsLiked) => {

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
            setIsLiked(!isLiked)
        };
    
};


const deleteCar = async (history , carId) => {
    
        const url = `http://localhost:9999/api/car/${carId}`;
        await fetch(url , {method: "DELETE"});
        history.push('/home');
};

const loadComments = (event, justMount ,setJustMount , setCar) => {
    
    let button = event.target
    
    if (button.textContent === 'Load') {
        
        setJustMount(!justMount);
        button.textContent = 'Hide';
        
    }else {
        button.textContent = 'Load';
        setJustMount(!justMount);
        setCar({ comments: [] })
    }

};

const comment = async (event ,carId , username , btnIsPressed , setBtnIsPressed) => {

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
            textArea.value = '';
            setBtnIsPressed(!btnIsPressed)
        };

};


const removeComment = async (carId , string , btnIsPressed , setBtnIsPressed) => {

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
            setBtnIsPressed(!btnIsPressed)
        };
    
};

export default {
    like,
    dislike,
    deleteCar,
    comment,
    removeComment,
    loadComments
};