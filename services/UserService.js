const db = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
let apiCreateUser = async (username, password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  let checkUserExist = await db.User.findOne({ where: { username: username } });
  if (checkUserExist) {
    throw new Error('Username đã tồn tại.');
  }
  else {
    let userItem = {
      username: username,
      password: bcrypt.hashSync(password, salt)
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

let apiLoginUser = async (data) => {
  try {
    let User = await db.User.findOne({ where: {username: data.username}});
    if(!User) {
      throw new Error("Tên đăng nhập không tồn tại !");
    }
    let checkPassword = await bcrypt.compareSync(data.password, User.password);
    if(!checkPassword) {
      throw new Error("Password nhập chưa chính xác.")
    }
    let accessToken = jwt.sign(data, process.env.SECRET_TEXT, {expiresIn: `${process.env.ACCESS_TOKEN_LIFE}`});
    console.log(accessToken);
  } catch (error) {
    throw error;
  }
}

module.exports = { apiCreateUser, apiUpdateUser, apiDeleteUser, apiReadUser, apiLoginUser }
