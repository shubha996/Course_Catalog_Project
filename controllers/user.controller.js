const db = require("../models");
const User = db.users;

exports.SignUp = (req, res) => {
    // Validate API Call
    if(!req.body.email || !req.body.password){
        res.status(400)
            .send({
                message: "Please provide email and password to continue"
            })
            return;
    }
    const filter = {email: req.body.email};

    User.findOne(filter, (err, user) => {
        if(!err & user === null){
            // Add user to the DB
            
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role ? req.body.role : "user"
            })
            user.save(user)
                .then((data) => {
                    res.status(200)
                        .send(data);
                })
                .catch((err) => {
                    res.status(500)
                        .send({
                            message: "Some error occurred"
                        })
                })
        }else{
            res.status(400)
                .send({
                    message: "User Already exists"
                })
        }
    });
}