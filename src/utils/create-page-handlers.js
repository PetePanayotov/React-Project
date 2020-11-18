const addNewImages = (event , setState , images) => {

    event.preventDefault();
    const currentImages = images.slice(0);

    currentImages.push('');

    return setState(state => {

        return {
            ...state,
            images: currentImages
        };
    });
};

const handleImageChange = (event, setState , currentImages , indexOfImage) => {

    const {value} = event.target;
    const newImages = currentImages.slice(0);
    newImages[indexOfImage] = value;

    return setState(state => {
        return {
            ...state,
            images: newImages
        };
    });

};

const addNewSpecs = (event , setState ,  specifications) => {
    
    event.preventDefault();

    const currentSpecs = specifications.slice(0);
    currentSpecs.push(['' , '']);

    return setState(state => {

        return {
            ...state,
            specifications: currentSpecs
        }

    });

};

const handleSpecChange = (event , setState , specifications , indexOfSpec  , indexOfString) => {

    const {value} = event.target;
    const currentSpecs = specifications.slice(0);
    const currentArrayOfSpecs = currentSpecs[indexOfSpec];
    
    currentArrayOfSpecs[indexOfString] = value;

    return setState(state => {
        
        return {
            ...state,
            specifications: currentSpecs
        };
    });

};

const create = async (event , state , history) => {

    event.preventDefault();

    const url = 'http://localhost:9999/api/car/';
    const data = {...state};

    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);
    
    if (promise.status === 200) {
       return history.push('/home')
    };

};

const update = async (event , state , history) => {
        
    event.preventDefault();
    
    const {_id} = state;
    const url = `http://localhost:9999/api/car/${_id}`;

    const data = {...state}

    const headerObj = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);
    
    if (promise.status === 200) {
        return history.push('/catalog')
    };

    return console.error('Something went wrong!')
    
};

export default {addNewImages , handleImageChange , addNewSpecs , handleSpecChange , create , update}