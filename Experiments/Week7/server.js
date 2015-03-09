var express = require('express')
var app = express()

app.get('/Hello', function (req, res) {
    res.send('Hello World! This is Node JS')
})

app.get('/paramSend/:param', function (req, res) {
    var paramInput = req.params.param;
    res.send(paramInput);
});

var developer = [
 {
     Name: "Ankit", LName: "Agrawal", Specialization: "Java", city: "Boston"
 },
 { firstName: "Bob", lastName: "Marley",  specialization: "Rock", city: "New York" },
]

app.get("/developer", function (req, res) { // get function to get a response from the server<br />
    res.json(developer);// send the whole developer array.<br />
});

app.get("/developer/:index", function (req, res) { // to access a particular developer<br />
    var idx = req.params['index']; //. notation (req.params.index), fetch the index from the url<br />
    res.json(developer[idx]); // send that particular array using the index.<br />
});


var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
