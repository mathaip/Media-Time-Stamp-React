try {
    const express = require('express')
    const appServer = express()
    const port = 3000
    appServer.get('/', (req, res) => res.send('Hello World'))
    appServer.listen(port, () => console.log(`Ok on port ${port}`))


} catch (error) {
    console.log(error);
}