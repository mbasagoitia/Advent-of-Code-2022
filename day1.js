//part 1

fetch("https://adventofcode.com/2022/day/1/input").
then((res) => res.text())
.then((data) => {
    let nums = data.split("\n\n");
    let arr = nums.map((data) => data.split("\n"));
    let sumArr = arr.map((el) => {
        return el.reduce((acc, number) => {
            return parseInt(number) + parseInt(acc);
        }, 0);
    })
    sumArr.pop();
    //elf with MOST
    console.log(Math.max(...sumArr));
    //TOP THREE
    let topThreeArr = [];
    topThreeArr.push(Math.max(...sumArr));
    let mostCalsIndex = sumArr.indexOf(Math.max(...sumArr));
    removeFromArr(sumArr, mostCalsIndex);
    topThreeArr.push(Math.max(...sumArr));
    let secondMostCalsIndex = sumArr.indexOf(Math.max(...sumArr));
    removeFromArr(sumArr, secondMostCalsIndex);
    topThreeArr.push(Math.max(...sumArr));
    
    console.log(topThreeArr.reduce((acc, num) => (acc + num), 0));
})
.catch((err) => console.error(err));

function removeFromArr(arr, targetIndex) {
    arr.splice(targetIndex, 1);
}