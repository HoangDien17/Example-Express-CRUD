const UserService = require('../services/UserService');
const { validationResult } = require('express-validator');

let apiCreateUser = async (req, res) => {
  try {
    let validationErrors = validationResult(req);
    if(validationErrors.isEmpty()) {
      let username = req.body.username;
      let password = req.body.password;
      let addUser = await UserService.apiCreateUser(username, password);
      res.status(200).json(addUser);
    }
    else {
      let errors = Object.values(validationErrors.mapped());
      let arrError = [];
      errors.forEach(item => {
        arrError.push(item.msg)
      })
      console.log(arrError);
      throw new Error(arrError);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

let apiUpdateUser = async (req, res) => {
  try {
    let confirmId = req.params.id;
    let resultUpdate = await UserService.apiUpdateUser(confirmId, req.body.username);
    res.status(200).json(resultUpdate);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
 let apiDeleteUser = async (req, res) => {
  try {
    let confirmId = req.params.id
    let resultDelete = await UserService.apiDeleteUser(confirmId); 
    res.status(200).json(resultDelete);
  } catch (error) {
    res.status(500).json(error.message);
  }
 }

 let apiReadUser = async (req, res) => {
   try {
     let allUser = await UserService.apiReadUser(); 
     res.status(200).json(allUser)
   } catch (error) {
    res.status(500).json(error.message);
   }
 }

 let apiLoginUser = async (req, res) => {
   try {
     await UserService.apiLoginUser(req.body)
     res.status(200).json(true)
   } catch (error) {
     res.status(500).json(error.message);
   }
 }

module.exports = { apiCreateUser, apiUpdateUser,apiDeleteUser, apiReadUser, apiLoginUser }
