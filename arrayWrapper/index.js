var ArrayWrapper = function(nums) {
    this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let total = 0;
    for (const elem of this.arr) {
        total += elem
    }
    return total;
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.arr}]`
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
// console.log(obj1)
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
// String(obj2); // "[3,4]"
