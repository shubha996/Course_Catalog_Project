module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");
    var router = require("express").Router();

    // Create a new Course
    router.post('/add', tutorials.create);

    // Retriving all the Courses
    router.get('/', () => {});

    // Retrive all categories
    router.get('/categories', tutorials.findAllCategories);

    // Retrive all Courses by Category
    router.get('/categories/:categoryName', tutorials.getCourseByCategory);

    // Retrive all the published courses
    router.get('/published', tutorials.getAllPublishedCourses);

    // Retrive all the unpublished courses
    router.get('/unpublished', tutorials.getAllUnpublishedCourses);

    // Retrive Course by ID
    router.get('/:id', tutorials.findOneCourse);

    // Update a Course
    router.put('/:id', () => {});

    // Delete a Course by ID
    router.delete('/delete/:id', tutorials.deleteCourseById);

    // Delete all Courses
    router.delete('/deleteall', tutorials.deleteAllCourses);



    app.use('/api/tutorials', router);
};