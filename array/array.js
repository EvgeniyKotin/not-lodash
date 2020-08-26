const _ = module.exports = {}

_.chank = function(array, size) {
    if(!size) {
        return array
    }
    let result = [];
    const numberOfChank = array.length / size
    for(let i = 0; i < numberOfChank; i++) {
        let chank = [];
        for(let j = 0; j < size; j++) {  
            if(i * size + j < array.length){
                chank.push(array[i * size + j]);
            }                      
        }
        result.push(chank);
    }
    return result;
}