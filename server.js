const express = require("express");
const bodyPaser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

const db = require("./models");

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Data base Connection Established !");
}).catch(err => {
    console.log("Data base Connection Failed", err);
    process.exit();
})

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to upGrads Course_Catalog Project");
});

require('./routes/tutorial.routes')(app);

app.listen(PORT, () => {
    console.log(`Connection Established on PORT ${PORT}`);
});