var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];



const num = (array) => {
    let uninum = [];
    for (let i = 0; i < array.length; i++) {
        if (uninum.indexOf(array[i]) === -1) {
            uninum.push(array[i]);
        }
    }
    return uninum;
};

console.log(num(numbers))