const without = function(source, itemsToRemove) {
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


module.exports = without;