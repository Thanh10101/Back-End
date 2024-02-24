require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const viewEngine = require('./config/viewEngine')
const initWeb = require('./api/v1/routes/web')
const initApi = require('./api/v1/routes/api')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const { connection } = require('./config/MySQL');

//Config env
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME;
global.process.setMaxListeners(0);
//config view engine
viewEngine(app);
//config cors
app.use(cors({
    origin: '*',
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}));


const sessionStore = new MySQLStore({}, connection);

//config session
app.use(session({
        key: 'session_cookie_name',
        secret: 'session_cookie_secret',
        resave: false,
        store: sessionStore,
        saveUninitialized: true,
        cookie: {
            secure: true,
            httpOnly: true,
            maxAge: 5 * 60 * 1000
        }
    }))
    //specifically about POST PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//router
initWeb.initWebAdmin(app);
initWeb.initWebClient(app);
// initApi(app)

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
});