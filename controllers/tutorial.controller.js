const db = require("../models");
const Tutorial = db.tutorials;

// API :: Create Course
exports.create = (req, res) => {
    // Validate Request
    if(!req.body.title){
        res.status(400).send(
            {message: "Content cannot be Empty!"}
            );
        return;
    }

    // Converting String to Array of SKills and Chapters
    var _chapter = req.body.chapters.toString().split(',');
    var _skills = req.body.skills.toString().split(',');

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published, 
        skills: _skills, 
        chapters: _chapter, 
        priceInRupees: req.body.priceInRupees, 
        priceAfterDiscount: req.body.priceAfterDiscount,   
        category: req.body.category, 
        imageURL: req.body.imageURL, 
        videoURL: req.body.videoURL, 
        notesURL: req.body.notesURL, 
        duration: req.body.duration
    });
    tutorial.save(tutorial)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500)
                .send({
                    message: "Some error occured while creating the course"
                });
            });
}

// Find one Course by ID
exports.findOneCourse = (req, res) => {
    const id = req.params.id;

    Tutorial.findById({_id: id})
            .then((data) => {
                if(!data){
                    res.status(404)
                        .send({
                        message: "No Course Found with the given ID",
                    });
                }else{
                    res.send(data);
                }
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some error while fetching the course",
                    });
            });
};

// Find All categories
exports.findAllCategories = (req, res) => {
    Tutorial.find({}).select("category").distinct("category")
            .then((data) => {res.send(data)})
            .catch((err) => {res.status(500).send({message: "Some error occurred while fetching categories"})})
}

// Find Course By Category
exports.getCourseByCategory = (req, res) => {
    const category = req.params.categoryName;

    // "i" is for ignore case sensitiveness
    var filter = { category: { $regex: new RegExp(category), $options: "i"}};

    Tutorial.find(filter)
            .then((data) => {
                res.status(200)
                    .send(data);
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some Error Occured while fetching the courses.",
                    });
            });
}

// Get all Published Courses
exports.getAllPublishedCourses = (req, res) => {
    Tutorial.find({published: true})
            .sort("-createdAt")
            .then((data) => {
                res.status(200).send({
                    categories: data,
                    message: "Courses fetch sucessfull.",
                });
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some error occurred while fetching the courses.",
                    });
            });
};

// Get all UnPublished Courses
exports.getAllUnpublishedCourses = (req, res) => {
    Tutorial.find({published: false})
            .sort("-createdAt")
            .then((data) => {
                res.status(200).send({
                    categories: data,
                    message: "Courses fetch sucessfull.",
                });
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some error occurred while fetching the courses.",
                    });
            });
};

// Delete Course by Id
exports.deleteCourseById = (req, res) => {
    const id = req.params.id;

    Tutorial.findOneAndDelete({_id: id})
            .then((data) => {
                res.status(200)
                    .send({
                        course: data,
                        message: "Course Deleted Successfully.",
                    })
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some error Occured while deleting the course",
                    })
            })
}

// Delete All Courses
exports.deleteAllCourses = (req, res) => {
    Tutorial.deleteMany({})
            .then((data) => {
                res.status(200)
                    .send({
                        course: data,
                        message: "Courses deleted Successfully"
                    })
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: "Some error occurred while deleting the courses"
                    })
            })
}
