const port = process.env.PORT || 8080;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const fileUpload = require("express-fileupload");
const cors = require('cors')
const routes = require("./routes/projet/route");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());

// DB Config
const db = require("./config/db").mongoURI;

// Connect to MongoDB
mongoose.connect(
db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB s'est connecté avec succès"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/projet/routes", routes);



app.listen(port, () => console.log(`Le serveur est opérationnel sur le port ${port} !`));
