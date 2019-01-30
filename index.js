const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectID
const BSON = require('mongodb').BSONPure
// const expressPromise = require('express-promise-router')()
// var bcrypt = require('bcrypt-nodejs')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport');
require('./models/userSignup');
const PostQueAns = require('./models/postQueAns')
const ParticularQueAns = require('./models/particularQueAns');
const Person = require('./models/dummyModel/person')
const Story = require('./models/dummyModel/story')
const Question = require('./models/question')
const Answer = require('./models/answer')

const app = express();
const router = express.Router();
// app.use(expressPromise)
//define cookie session with maximum time with random keys
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
//telling to passport use the cookie session & initialize
app.use(passport.initialize());
app.use(passport.session());

//When cors problem occure to represent the data on the browser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Converting and reading data in JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Connecting MongoDb

try {
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
} catch (error) {
    console.log('db connection Error : ',error)
}

// append /api for our http requests to authRouter
require('./routes/authRoutes')(app);
// app.use("/api", router);

let db = mongoose.connection;
db.once("open", () => console.log("Connected to the database"))
db.on("error", () => console.error.bind(console, "MongoDB connection error"))

app.get('/data', (req, res) => {
    var coll = db.collection('users');
    coll.find({}).toArray((err, result) => {
        if(err)
            res.send(err)
        else
            res.send(JSON.stringify(result))
    })
})

app.post('/user_register', (req, res) => {
    var coll = db.collection('mannual_users');
    var user = {
        userName: req.body.firstName,
        userFullName: req.body.firstName +" "+ req.body.lastName,
        userEmail: req.body.email,
        password: req.body.password //todo
    }
    coll.insertOne(user, (err, result) => {
        if(err)
            throw err;
        // console.log(result)
        res.redirect('http://localhost:3000')
        console.log('Inserted successfully')
    })
})
var mannualUserlogged ;
app.post('/user_login', (req, res) => {
    var userEmail = req.body.userEmail;
    var password = req.body.password;
    var coll = db.collection('mannual_users');
    coll.find({"userEmail" : userEmail, "password": password}).toArray((err, ressss) => {
        if(err)
            throw err;
        else if(ressss.length == 0)
            res.redirect('http://localhost:3000')
        else {
            mannualUserlogged = JSON.stringify(ressss);
            res.redirect('http://localhost:3000/login/content-manager');
        }
    });
})
app.get('/userMannual_login', (request, response) => {
    response.send(mannualUserlogged)
})
app.get('/login_error', (req, res) => {
    res.send('Wrong username password...')
})

// app.post('/post_que_ans', (req, res) => {
//     var coll = db.collection('PostQueAns');
//     var QA = {
//         QAHeading: req.body.QueAnsHeading,
//         QADescription: req.body.QueAnsDescription
//     }
//     coll.insertOne(QA, (err, result) => {
//         if(err)
//             throw err;
//         // console.log(result)
//         res.redirect('http://localhost:3000/particular/que-ans')
//         console.log('QA Posted successfully')
//     })
// })
app.post('/post_que_ans', async (req, res) => {

    var coll = db.collection('questions');
    const QA ={
        QAHeading : req.body.QAHeading,
        QADescription : req.body.QADescription,
        lastResponse: new Date().toLocaleDateString(),
        dateSent: new Date().toLocaleDateString() +' '+ new Date().toLocaleTimeString(),
    }
    await coll.insertOne(QA, async (err, result) => {
        if(err)
            throw err;
        await res.redirect('http://localhost:3000/login/content-manager')
        console.log('Question Posted successfully')
    })
})


app.get('/postedQA', (req, res) => {
    var coll = db.collection('questions')
    coll.find({}).toArray((err, result) => {
        if(err)
            res.send(err)
        else {
            res.send(JSON.stringify(result))   
        }
    })
})

app.get('/get_particularQA', (req, res)=> {
    var coll = db.collection('PostQueAns');
    coll.find({}).toArray((err, result) => {
        if(err)
            res.send(err)
        else
            res.send(JSON.stringify(result))
    })
})

//Dummy Checking Model POST metod
app.post('/check/:id', async (req, res) => {
    const {id} = req.params
    const newStory = new Story(req.body)
    // console.log('newStory', newStory)
    const newPerson = await Person.findById(id)
    console.log(newPerson)
    newStory.personId = newPerson
    await newStory.save();
    newPerson.stories.push(newStory)
    await newPerson.save();
    res.status(201).json(newStory)

})
// Dummy Checking Model GET metod
app.get('/check/:id', async (req, res) => {
    const {id} = req.params
    const newPerson = await Person.findById(id).populate('stories')
    console.log('Persons', newPerson)
})


app.post('/post_particularQA/:id', async (req, res) => {
    const {id} = req.params
    const newAnswer = new Answer(req.body)
    // console.log('newAnswer', newAnswer)
    const newQuestion = await Question.findById(id)
    // console.log(newQuestion)
    newAnswer.que = newQuestion
    await newAnswer.save();
    newQuestion.ans.push(newAnswer)
    await newQuestion.save();
    // res.status(201).json(newAnswer)
    res.redirect(`http://localhost:3000/particular/que-ans/${id}`)
})

app.get('/ans_populate/:id', async (req, res) => {
    const {id} = req.params
    const newQuestion = await Question.findById(id).populate('ans')
    // console.log('Persons', newQuestion)
    res.send(JSON.stringify(newQuestion))
    // res.setHeader("Content-Type", "text/html");
    await res.redirect(`http://localhost:3000/particular/que-ans/${id}`)
})

app.get('/get_myTable', (req, res) => {
    var coll = db.collection('myTable');
    coll.find({}).toArray((err, result) => {
        if(err)
            res.send(err)
        else
            res.send(JSON.stringify(result))
    })
})



// When hosting your application on another service (like Heroku, Nodejitsu, and AWS), 
// your host may independently configure the process.env.PORT variable for you; 
// after all, your script runs in their environment.

const PORT = process.env.PORT || 5000
var server = app.listen(PORT, () => {
    console.log('Server running on port: ', server.address().port)
});
