let count = 0;

fetch("https://adventofcode.com/2022/day/4/input").
then((res) => res.text())
.then((data) => {
    let arr = data.split("\n");
    let bigArr = [];
    while (arr.length > 0) {
        bigArr.push(arr.splice(0, 1));
    }
    bigArr.pop();
    bigArr.forEach((arr) => {
        compareNums2(arr);
    })
    console.log(count);
})
.catch((err) => console.error(err));


let testArr = ['16-80,80-87'];

function compareNums (arr) {
    let arr1 = arr[0].split(",");
    let arr2 = arr1[0].split("-").concat(arr1[1].split("-"));
    if ((parseInt(arr2[0]) >= parseInt(arr2[2]) && parseInt(arr2[1]) <= parseInt(arr2[3])) || (parseInt(arr2[0]) <= parseInt(arr2[2]) && parseInt(arr2[1]) >= parseInt(arr2[3]))) {
        count++;
    }
}

function compareNums2 (arr) {
    let arr1 = arr[0].split(",");
    let arr2 = arr1[0].split("-").concat(arr1[1].split("-"));
    if (parseInt(arr2[1]) >= parseInt(arr2[2]) && parseInt(arr2[3]) >= parseInt(arr2[0]) || parseInt(arr2[3]) >= parseInt(arr2[0]) && parseInt(arr2[1]) >= parseInt(arr2[2])) {
        count++;
    }
}