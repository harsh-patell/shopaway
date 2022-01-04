// Modules
const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const mongoose = require("mongoose");

// App (express application) Object 
const app = express();

// Important 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB server locally
mongoose.connect('mongodb://localhost:27017/shopListDB', {useNewUrlParser: true, useUnifiedTopology: true});

// Connect to MongoDB on Atlas - later

// Product Schema 
const productSchema = new mongoose.Schema({
    name: String,
    image: String
});

// Product Model
const Product = mongoose.model('Product', productSchema);


// Retailer Schema
const retailerSchema = new mongoose.Schema({
    name: String,
    products: [productSchema]
})

// Retailer Model
const Retailer = mongoose.model('Retailer', retailerSchema);


// GET - home route
app.get("/", (req, res) => {
    
    Retailer.find({}, (err, foundItems) => {
        res.render('index', { retailers: foundItems });
    });

    // res.sendFile(__dirname + "/main/index.html");
});





// Listening 
let port = process.env.PORT;
if (port == null || port == "")
    port = 3000;

app.listen(port, function () {
    console.log("Server started on Port 3000.")
})





    // open page that shows (12 stores, 35 items)
    // 12 stores can toggle all the stores
    // clicking on the store will take to a page with items for that retailer
    // show all items (organization structure - common for all lists pages)
    // retailer name at top
    // a checklist sort of but broad to encompass picture
    // checkbox for now to remove item


    // Extras
    // create page with retailer if none
    // remove page with retailer if last item is removed

    //Pages
    // main & css
    // lists & css
    // footer & header consistent??

    // Save
    // should create/modify retailer lists and create item, but how??
    // can it create a new item/retailer?? or should that