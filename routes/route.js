 const express = require('express');
 const router=express.Router();
 //create a new user
 router.post('/add',createdUser);
 //get all users
 router.get('/getallusers',getUsers)
 //get a user by ID
 router.get('/getuser/:id',getUserById)
 //update a user by ID
 router.put('/update/:id',updateUser)
 //delete a user by ID
 router.delete('/deleteuse/:id',deleteUser)

 module.exports={router};