const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter.js')
const authRouter = require('./routers/auth.router.js')
const profileRouter = require('./routers/profile.router.js')
const dotenv = require('dotenv')
dotenv.config()
//mid

// cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));
// view engine
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// static file
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))


// router
app.get('/', (req, res) => {
    res.render('home.html')
})
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/profile', profileRouter)


mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log('http://localhost:' + process.env.PORT)
        })
    })
    .catch(err => { console.log(err) })