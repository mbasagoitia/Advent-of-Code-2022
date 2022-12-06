 let stacks = {
    1: ["N", "Q", "L", "S", "C", "Z", "P", "T"],
    2: ["G", "C", "H", "V", "T", "P", "L"],
    3: ["F", "Z", "C", "D"],
    4: ["C", "V", "M", "L", "D", "T", "W", "G"],
    5: ["C", "W", "P"],
    6: ["Z", "S", "T", "C", "D", "J", "F", "P"],
    7: ["D", "B", "G", "W", "V"],
    8: ["W", "H", "Q", "S", "J", "N"],
    9: ["V", "L", "S", "F", "Q", "C", "R"]
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

    let boxOrder = [];
    for (let stack in stacks) {
        boxOrder.push(stacks[stack][0]);
    }
    let answer = boxOrder.join("");
    console.log(answer);

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


