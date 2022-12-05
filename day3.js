const priorities = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52
};

let sumArr = [];

fetch("https://adventofcode.com/2022/day/3/input").
then((res) => res.text())
.then((data) => {
    let arr = data.split("\n");
    arr.forEach((str) => {
        findSameLetter(str);
    })
    //console.log(sumArr);
    let answer = sumArr.reduce((acc, el) => {
        return acc + priorities[el];
    }, 0)
    console.log(answer);
})
.catch((err) => console.error(err));


function findSameLetter (str) {
    let halfIndex = str.length/2;
    let firstHalf = Array.from(new Set(str.substring(0, halfIndex).split("")));
    let secondHalf = Array.from(new Set(str.substring(halfIndex, str.length).split("")));
    firstHalf.forEach((letter) => {
        if (secondHalf.includes(letter)) {
            sumArr.push(letter);
        }
    })
}

// part 2
let sumArray2 = [];

fetch("https://adventofcode.com/2022/day/3/input").
then((res) => res.text())
.then((data) => {
    let arr = data.split("\n");
    let bigArr = [];
    while (arr.length > 0) {
        bigArr.push(arr.splice(0, 3));
    }
        
    for (let arr of bigArr) {
        checkThreeArrs(arr[0], arr[1], arr[2]);
    }
    let answer2 = sumArray2.reduce((acc, el) => {
        return acc + priorities[el];
    }, 0)
    console.log(answer2);
})
.catch((err) => console.error(err));

function checkThreeArrs (arr1, arr2, arr3) {
    let first = Array.from(new Set(arr1));
    let second = Array.from(new Set(arr2));
    let third = Array.from(new Set(arr3));
    first.forEach((letter) => {
        if (second.includes(letter) && third.includes(letter)) {
            sumArray2.push(letter);
        }
    })
}
