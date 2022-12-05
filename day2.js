//part 1
let moveScore = 0;
let winLoseScore = 0;

fetch("https://adventofcode.com/2022/day/2/input").
then((res) => res.text())
.then((data) => {
    let arr = data.split("\n");
    arr.forEach((el) => {
        if (el.slice(-1) == "X") {
            moveScore ++;
        } else if (el.slice(-1) == "Y") {
            moveScore += 2;
        } else if (el.slice(-1) == "Z") {
            moveScore += 3;
        }
    })
    console.log(moveScore);

    arr.forEach((el) => {
        if (el == 'A Y' || el == 'B Z' || el == 'C X') {
            winLoseScore += 6;
        } else if (el == 'A X' || el == 'B Y' || el == 'C Z') {
            winLoseScore += 3;
        }
    })
    //here's the answer
    console.log(winLoseScore + moveScore);
})
.catch((err) => console.error(err));

// X: 1 point (rock) A
// Y: 2 points (paper) B
// Z: 3 points (scissors) C

// winning moves: 'A Y', 'B Z', 'C X'
// tying moves: 'A X', 'B Y', 'C Z'
// losing moves: 'A Z', 'B X', 'C Y'

//part 2

// X: lose
// Y: draw
// Z: win

// you play rock: 'B X', 'A Y', 'C Z'
// you play paper: 'C X, 'B Y', 'A Z'
// you play scissors: 'A X', 'C Y', 'B Z'

//part 2
let moveScore2 = 0;
let winLoseScore2 = 0;

fetch("https://adventofcode.com/2022/day/2/input").
then((res) => res.text())
.then((data) => {
    let arr = data.split("\n");
    arr.forEach((el) => {
        if (el == 'B X' || el == 'A Y' || el == 'C Z') {
            moveScore2 ++;
        } else if (el == 'C X' || el == 'B Y' || el == 'A Z') {
            moveScore2 += 2;
        } else if (el == 'A X' || el == 'C Y' || el == 'B Z') {
            moveScore2 += 3;
        }
    })
    console.log(moveScore2);

    arr.forEach((el) => {
        if (el.slice(-1) == "Z") {
            winLoseScore2 += 6;
        } else if (el.slice(-1) == "Y") {
            winLoseScore2 += 3;
        } 
    })
    //here's the answer
    console.log(winLoseScore2 + moveScore2);
})
.catch((err) => console.error(err));