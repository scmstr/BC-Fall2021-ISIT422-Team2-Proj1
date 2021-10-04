const express = require('express')
const app = express()
const port = 3000


//test! blank page at basic empty {port}. sends message in single quotes as html string/content
// app.get('/', (req, res) => res.send('potatoes for everybody - it works!'))


//tells you that it's working. ITS ALIIIIIIIIIIIIIVE!!!! (its october, have fun >:D)
app.listen(port, () => console.log(`App listening on port ${port}!`))





//ask for nothing, literally sends you the page1.html file thats in the "__dirname" location
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page1.html')
})


app.get('/page2.html', (req, res) => {
    res.sendFile(__dirname + '/page2.html')
})

app.get('/page3.html', (req, res) => {
    res.sendFile(__dirname + '/page3.html')
})













