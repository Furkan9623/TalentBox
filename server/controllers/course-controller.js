const UserModel = require("../models/user-schema");

const Course_Controller = async (req, res) => {
  const id = req.UserId;
  try {
    const getUser = await UserModel.findOne({ _id: id });
    return res.status(200).json({
      success: true,
      user: {
        name: getUser.name,
        email: getUser.email,
        imageUrl: getUser.userImg,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = Course_Controller;
