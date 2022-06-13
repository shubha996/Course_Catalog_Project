module.exports = app => {
    var router = require("express").Router();

    // Create a new Course
    router.post('/add', (req, res) => {
        console.log("Test Add Course");
        res.send("Hello")
    });

    // Retriving all the Courses
    router.get('/', () => {});

    // Retrive all categories
    router.get('/categories', () => {});

    // Retrive all the published courses
    router.get('/published', () => {});

    // Retrive Course by ID
    router.get('/:id', () => {});

    // Update a Course
    router.put('/:id', () => {});

    // Delete a Course by ID
    router.delete('/:id', () => {});

    // Delete all Courses
    router.delete('/', () => {});



    app.use('/api/tutorials', router);
};