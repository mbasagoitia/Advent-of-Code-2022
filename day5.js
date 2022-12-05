 let one = ["N", "Q", "L", "S", "C", "Z", "P", "T"];
 let two = ["G", "C", "H", "V", "T", "P", "L"];
 let three = ["F", "Z", "C", "D"];
 let four = ["C", "V", "M", "L", "D", "T", "W", "G"];
 let five = ["C", "W", "P"];
 let six = ["Z", "S", "T", "C", "D", "J", "F", "P"];
 let seven = ["D", "B", "G", "W", "V"];
 let eight = ["W", "H", "Q", "S", "J", "N"];
 let nine = ["V", "L", "S", "F", "Q", "C", "R"];

 let stacks = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
    9: nine
 };

 let instructions = [];
 fetch("https://adventofcode.com/2022/day/5/input")
 .then(res => res.text())
 .then((data) => {
    let arr = data.split("\n");
    arr.splice(0, 10);
    arr.pop();
    arr.forEach((el) => {
        extractNums(el);
    })
    
    instructions.forEach((instruction) => {
        moveBoxes(instruction);
    })

    console.log(stacks);

});

function extractNums(str) {
    let nums = str.replace(/\D/g, '');
    instructions.push(nums);
}

function moveBoxes(str) {
    let numBoxes;
    let fromStack;
    let toStack;

    if (str.length === 3) {
        numBoxes = parseInt(str.substr(0, 1));
        fromStack = parseInt(str.substr(1, 1));
        toStack = parseInt(str.substr(2, 1));
    } else {
        numBoxes = parseInt(str.substr(0, 2));
        fromStack = parseInt(str.substr(2, 1));
        toStack = parseInt(str.substr(3, 1));
    }
    
    let boxes = stacks[fromStack].splice(0, numBoxes);
    //part 1 no need to reverse. unshift adds them in opposite order anyway
    //part 2 reverse the boxes
    let reversedBoxes = boxes.reverse();
    reversedBoxes.forEach((box) => {
        stacks[toStack].unshift(box);
    })
    
}


