const express = require('express')

const app = express()
const port = 3000

const info = {success: true,
	 data: 'dos'};

app.get('/api/health', (req, res) => {
	// Your code here
	res.json(info)
})

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
)
