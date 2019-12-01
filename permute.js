const permute = (string) => {
	if (string.length < 2) return string
	const permutations = []

	for (let i = 0; i < string.length; i++) {
		const char = string[i]

		// to avoid duplicates check if character used already
		if (string.indexOf(char) != i) continue
		// if used already, continue will skip over this iteration

		const remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

		for (const subPermutation of permute(remainingString))
			permutations.push(char + subPermutation)
	}
	return permutations
}

module.exports = {
	permute
}
