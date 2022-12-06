fetch("https://adventofcode.com/2022/day/6/input")
.then(res => res.text())
.then((data) => {
    findMarker(data, 0);
});

function findMarker(str, idx) {
    let subString = str.substr(idx, 4);
    if (Array.from(new Set([subString[0], subString[1], subString[2], subString[3]])).length === 4) {
        console.log(idx + 4);
        return;
    } else if (idx === str.length-1) {
        console.log("no markers found");
        return;
    } else {
        findMarker(str, idx+1);
    }
}

//part 2
//literally just the same thing except change the length of the substring to 14 instead of 4

fetch("https://adventofcode.com/2022/day/6/input")
.then(res => res.text())
.then((data) => {
    findMarker(data, 0);
});

function findMarker(str, idx) {
    let subString = str.substr(idx, 14);
    if (Array.from(new Set([subString[0], subString[1], subString[2], subString[3], subString[4], subString[5], subString[6], subString[7], subString[8], subString[9], subString[10], subString[11], subString[12], subString[13]])).length === 14) {
        console.log(idx + 14);
        return;
    } else if (idx === str.length-1) {
        console.log("no markers found");
        return;
    } else {
        findMarker(str, idx+1);
    }
}