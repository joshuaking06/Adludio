const express = require('express')
const permute = require('./permute')

const app = express()

app.get('/permutation-index/:word', (req, res) => {
	const arr = permute.permute(req.params.word).sort()
	const index = arr.indexOf(req.params.word)
	res.send({ indexOfGivenPermutation: index })
})

app.listen(4000, () => console.log('listening on 4000'))
