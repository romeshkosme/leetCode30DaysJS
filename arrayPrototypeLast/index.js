Array.prototype.last = function () {
  if (this.length > 0) return this[this.length-1]
  return -1
}
// const a = [1,2,3]
const a = []
console.log(a.last())