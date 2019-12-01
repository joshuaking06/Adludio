const express = require('express')
const permute = require('./permute')

const app = express()

app.get('/permutation-index/:word', (req, res) => {
	// create array of all permutations and sort alphabetically
	const arr = permute.permute(req.params.word).sort()
	// find index
	const index = arr.indexOf(req.params.word)
	// response
	res.send({ indexOfGivenPermutation: index })
})

app.listen(4000, () => console.log('listening on 4000'))
