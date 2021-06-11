const db = require('../models');
const { Op } = require('sequelize')

let apiCreateUser = async (username, password) => {
  let checkUserExist = await db.User.findOne({ where: { username: username } });
  if (checkUserExist) {
    throw new Error('Username đã tồn tại.');
  }
  else {
    let userItem = {
      username: username,
      password: password
    }
    let user = await db.User.create(userItem);
    return { message: "Username tạo thành công !", user };
  }

};
let apiUpdateUser = async (confirmId, user) => {
  try {
    let checkUserExist = await db.User.findOne({ where: { username: user } });
    if (!checkUserExist) {
      let updateUser = await db.User.update(
        {
          username: user
        },
        {
          where: { id: confirmId }
        });
        return { message: "Update tài khoản thành công !", updateUser };
    }
    throw new Error('Username đã tồn tại, xin mời đặt username khác.')
  } catch (error) {
    throw error
  }
}

let apiDeleteUser = async (confirmId) => {
  try {
    let checkDeleteUser = await db.User.destroy({ where: {id: confirmId}});
    if(checkDeleteUser === 1) {
      return {message: "Xóa tài khoản thành công.", checkDeleteUser};
    }
    throw new Error("Tài khoản đã bị xóa ra khỏi hệ thống.")
  } catch (error) {
    throw error;
  }
}

let apiReadUser = async () => {
  let allUser = await db.User.findAll({});
  return {allUser};
}

module.exports = { apiCreateUser, apiUpdateUser, apiDeleteUser, apiReadUser }
