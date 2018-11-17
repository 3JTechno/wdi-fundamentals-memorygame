//Express is a framework that is based on 'http' and ease the dev of backend
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
//Define where the img, css and js files are stored for easy access
app.use(express.static('public'));
//Use views to render html pages (allows templating)
app.set('view engine', 'ejs')
//Declare router object for all from http://127.0.0.1/
app.use('/', router)


//Start server
app.listen(process.env.PORT || 3000,function () {
  console.log('Example app listening on port 3000!')
})

router.get('/', function(req, res){
  res.render('index')
  })
