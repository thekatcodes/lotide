function without(source, itemsToRemove) {
	let result = source;

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < itemsToRemove.length; j++) {
			if (result[i] === itemsToRemove[j]) {
				result.splice(i, 1);
				i--;
			}
		}
	}
	return result;
}

//TEST
without([1, 2, 3], [1]); // => [2, 3]
