const UserService = require('../services/UserService');

let apiCreateUser = async (req, res) => {
  try {
    let {username, password} = req.body;
    let addUser = await UserService.apiGetUser(username, password);
    res.status(200).json(addUser);
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


module.exports = { apiCreateUser, apiUpdateUser,apiDeleteUser, apiReadUser }
