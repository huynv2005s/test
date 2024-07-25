const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter.js')
const authRouter = require('./routers/auth.router.js')
const profileRouter = require('./routers/profile.router.js')
const postRouter = require('./routers/post.router.js')
const dotenv = require('dotenv')
const { Server } = require("socket.io");
dotenv.config()

// socket






const server = createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
//mid

// cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: true }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
// view engine
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// static file
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))


// router
app.get('/', (req, res) => {
    res.render('home.html')
});
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/profile', profileRouter)
app.use('/post', postRouter)

mongoose.connect(process.env.DB_URL)
    .then(() => {
        server.listen(process.env.PORT || 8000, () => {
            console.log('http://localhost:' + process.env.PORT)
        })
    })
    .catch(err => { console.log(err) })