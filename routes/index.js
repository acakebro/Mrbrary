// everything for when we dont have a resource or a model in our URL 
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { // function request, and send response
    res.render('index') // render our view called index 
})

// rmb to export so information can be exported 
// so that whenever we import our router in our application in server.js, the var
// the indexRouter that we are setting will point to router in index.js 
module.exports = router
