var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trial_data');
var express = require('express');
var app = express();

var DeveloperSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,    
}, { collection: "form_final" });
var form_final = mongoose.model("form_final", DeveloperSchema);
//var developer1 = new form_final({ firstName: "Ankit", lastName: "Agrawal" });
//var developer2 = new form_final({ firstName: "Rajnikant", lastName: "Kant" });
//var developer3 = new form_final({ firstName: "Abhishek", lastName: "Nirmal" });
//developer1.save();// To save it locally on the db
//developer2.save();
//developer3.save();
app.get('/form_final', function (req, res) {
    form_final.find(function (err, data) {
        res.json(data);
    });
});

app.get('/form_final/:id', function (req, res) {
    form_final.findById(req.params.id, function (err, data) {
        res.json(data);
        console.log(data);
    });
});


app.get('/updateLName', function (req, res) {
    var query = { lastName: 'Agrawal' };
    form_final.findOneAndUpdate(query, { lastName: 'AgrawalAgrawalConcatenated' }, function (err, data) {
        res.json(data);
    });
});


app.get('/countNoOfRec', function (req, res) {
    form_final.count(function (err, data) {
        res.json(data);
    });
});
app.listen(3000);

