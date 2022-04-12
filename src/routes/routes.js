module.exports = routes => {
    const user= require("../controllers/controller");

    var router = require("express").Router();
    // USER
    // Create a new user
    router.post("/user", user.createUser);
    // Retrieve all user
    router.get("/user", user.getAllUsers);
    // Retrieve a single user with id
    router.get("/user/:id", user.getUser);
    // Update a user with id
    router.put("/user/:id", user.updateUser);
    // Delete a user with id
    router.delete("/user/:id", user.deleteUser);
    // Login user
    router.post("/login", user.loginUser);


    routes.use('/api', router);
  };