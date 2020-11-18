const like = async (carId , userId , setPressed) => {

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
            setPressed(pressed => !pressed)
        };
    
};


const dislike = async (carId , userId ,  setPressed) => {

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
            setPressed(pressed => !pressed)
        };
    
};


const deleteCar = async (history , carId) => {
    
        const url = `http://localhost:9999/api/car/${carId}`;
        await fetch(url , {method: "DELETE"});
        history.push('/home');
};

const loadComments = (event , setDisplayComments) => {

    const button = event.target;
    
    button.textContent !== 'Load' ? button.textContent = 'Load' : button.textContent = 'Hide'

    return setDisplayComments(displayComments => !displayComments);

};

const comment = async (event ,carId , username , setPressed) => {

        const parent = event.target.parentNode.parentNode;
        const children = Array.from(parent.children).slice(1);
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
            children.map(child => child.style.display = 'flex');
            setPressed(pressed => !pressed)
        };

};


const removeComment = async (carId , string , setPressed) => {

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
            setPressed(pressed => !pressed)
        };
    
};

const leftArrowHandler = (event , imagesArray , setIndex) => {

    event.preventDefault();

    return setIndex(index => {
        
        const {length} = imagesArray;
        const newIndex = index === 0  ? length - 1  
                                      : index - 1;

        return newIndex;
    });
};

const rightArrowHandler = (event , imagesArray , setIndex) => {

    event.preventDefault();

    return setIndex(index => {

        const {length} = imagesArray;
        const newIndex = index === (length - 1)   ? 0  
                                                  : index + 1;

        return newIndex;
    });

};

export default {
    like,
    dislike,
    deleteCar,
    comment,
    removeComment,
    loadComments,
    leftArrowHandler,
    rightArrowHandler
};