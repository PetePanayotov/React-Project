const handlePlusClick = (event , setState ,  specifications) => {
    
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

const handleSpecChange = (event , setState , specifications , index) => {

    const {value} = event.target;
    const currentSpecs = specifications.slice(0);
    const lastIndex = currentSpecs.length - 1;

    const lastArrayOfSpecs = currentSpecs[lastIndex];
    lastArrayOfSpecs[index] = value;

    return setState(state => {
        
        return {
            ...state,
            specifications: currentSpecs
        };
    });

};

const handleSubmit = async (event , state , history) => {

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

export default {handlePlusClick , handleSpecChange , handleSubmit}