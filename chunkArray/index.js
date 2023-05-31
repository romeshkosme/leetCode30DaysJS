function chunk(arr, size) {
    const chunkArr = []
    let counter = 0;
    const response = []
    for (const elem of arr) {
        if (counter < size) {
            chunkArr.push(elem)
            counter++;
            if (counter === size) {
                response.push([...chunkArr])
                counter = 0
                chunkArr.length = 0
            }
        }
    }
    if (chunkArr.length) response.push([...chunkArr])
    return response;
};

const a = [1,2,3,4,5]
// const a = [1,9,6,3,2]
console.log(chunk(a, 2))