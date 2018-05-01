var express = require("express");
var app = express();
var path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const saltRounds = 10;

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";
var client = new pg.Client(conString);

function verifyToken(req, res, next) {
    var token = req.body.token;
    if (token) {
        jwt.verify(token, "Secret", (err, decode) => {
            if (err) {
                res.send("Wrong token")
            } else {
                res.locals.decode = decode
                next();
            }
        })
    } else {
        res.send("No token")
    }
}

// Server will only listen if it can connect to the DB
client.connect((err) => {
    if (err) {
        return console.error(err);
    } else {
        console.log('successfully connected to postgres DB');
        app.listen(process.env.PORT, function () {
            // Log which port the server is listening on
            // If process.env.PORT === 5000 then the server is running locally
            console.log(`listening on port: ${process.env.PORT}`)
        });
    }
});

// Send index.html on load of the page
app.get("/", (req, res) => {
    res.sendFile("index.html")
})


// app.post('/signUpData', (req, res) => {
//     if (req.body.username.length && req.body.password.length) {
//         db.collection('users').find({ username: req.body.username }).toArray((err, dataMatch) => {
//             if (!dataMatch.length) {
//                 bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
//                     db.collection('users').save({ username: req.body.username, password: hash, work: req.body.work }, (err, result) => {
//                         if (err) {
//                             res.json("Failed")
//                             return console.log(err);
//                         } else {
//                             res.json("Sign Up Successful")
//                             console.log('saved to database');
//                         }
//                     });
//                 });
//             } else {
//                 res.json('This username already exists')
//             }
//         })
//     } else {
//         res.json(`Error: username or password can't be blank`)
//     }
// });


// app.post("/signInData", (req, res) => {
//     db.collection("users").find({ username: req.body.username }).toArray((err, user) => {
//         if (!user.length) {
//             res.json({
//                 message: "Username/Password doesn't match"
//             });
//         } else if (err) {
//             res.json({
//                 message: err
//             });
//         } else {
//             bcrypt.compare(req.body.password, user[0].password, function (err, resolve) {
//                 if (resolve === true) {
//                     var token = jwt.sign(req.body.username, ('Secret'), {
//                     });
//                     console.log(`user: "${req.body.username}" has logged in at ${new Date()}`)
//                     res.json({
//                         message: "Login successful!",
//                         myToken: token
//                     });
//                 } else if (resolve === false) {
//                     console.log(`user: "${req.body.username}" has failed a login in at ${new Date()}`)
//                     res.json({
//                         message: "Username/Password doesn't match",
//                     })
//                 }
//             });
//         }
//     })
// });
