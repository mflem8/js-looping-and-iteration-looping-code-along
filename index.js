// Code your solutions in this file


const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(int) {
    let i = int;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    
}
