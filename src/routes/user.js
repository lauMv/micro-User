'use strict';
const express = require('express');
const router = express.Router();
const userService = require("../app/services/userService");
  
  
router.post("/", async(request, response) => {
  try {
      const result = await userService.createUser(request, response);
      response.status(200).send(result);
  } catch (error) {
      console.log(error);
  }
});

router.get("/", async(request, response) => {
  const users = await userService.findUsers(request, response);
  response.send(users)
});
  
router.get("/:id", async(request, response) => {
  const user = await userService.findUserById(request, response);
  response.send(user)
});
  
router.put("/:id", async(request, response) => {
  const user = await userService.updateUser(request, response);
  response.send(user)
});
  
router.delete("/:id", async(request, response) => {
  const user = await userService.deleteUSer(request, response);
  response.send(user)
});

module.exports = router;