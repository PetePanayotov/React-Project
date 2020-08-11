const handleInputChange = (event , state ,stateProperty , callBack) => {

    const eventTargetType = event.target.type;
    
    if (eventTargetType === 'text' || eventTargetType === 'textarea') {
        
        const newState = {};

        newState[stateProperty] = event.target.value;

        callBack(newState);
     
        return;
    };

    const newState = {};
    
    newState['isVipOffer'] = !(state['isVipOffer']);
    callBack(newState);

};

const handlePlusButtonClick = (event , state , callBack) => {
     
    event.preventDefault();
   
    const currentSpecifications = state.specifications.slice(0);
    currentSpecifications.push([]);

    callBack({
        specifications: currentSpecifications
    });

};

const handleCharactericsChange = (event , state , callBack) => {

    const parent = event.target.parentNode;

    const inputs = Array.from(parent.children);
    const [firstInput , secondInput] = inputs;
    const property = firstInput.value;
    const value = secondInput.value;

    const currentSpecs = state.specifications.slice(0);
    const lastElement = currentSpecs.length - 1;
    
    currentSpecs[lastElement] = [property , value];

    callBack({
        specifications: currentSpecs
    });

};

export default {
                handleInputChange,
                handlePlusButtonClick,
                handleCharactericsChange
            }