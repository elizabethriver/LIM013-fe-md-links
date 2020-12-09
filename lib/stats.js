
let newSet = new Set([0, 1, 2, 5, 2, 1, 0]);
let uniqueArray1 = [... new Set(newSet)];
let total = newSet.size;



console.time();
console.log(newSet);
console.log(total);
console.log(uniqueArray1);
// console.log(uniqueArray);

console.timeEnd();
// console.log(totalLinks(newSet));
// module.exports = totalLinks;