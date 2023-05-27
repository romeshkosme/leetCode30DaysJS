function flat(arr, n) {
  if (n === 0) return arr;
	let flatCount = 0;

	const flatArr = (array, level) => {
		const temp = []
		for (const elem of array) {
			if (Array.isArray(elem) && level < n) {
				level++
				temp.push(...flatArr(elem, level))
				level--
			} else temp.push(elem)
		}
		return temp
	}
	return flatArr(arr, flatCount)
};

const a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// const a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(a, 3))