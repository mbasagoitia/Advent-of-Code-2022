fetch("https://adventofcode.com/2022/day/6/input")
.then(res => res.text())
.then((data) => {
    //part 1
    findMarker(data, 0, 4);
    //part 2
    findMarker(data, 0, 14);
});

function findMarker(str, idx, targetLength) {
    let subString = str.substr(idx, targetLength);
    if (Array.from(new Set([...subString])).length === targetLength) {
        console.log(idx + targetLength);
        return;
    } else if (idx === str.length-1) {
        console.log("no markers found");
        return;
    } else {
        findMarker(str, idx+1, targetLength);
    }
}

