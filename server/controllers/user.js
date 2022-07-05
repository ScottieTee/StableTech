const horses = require("../models/horses");
const User = require("../models/users");

const userControllers = {
  //get all users 
  async totalUsers(req, res) {
    try {
      const users = await User.find({});
      if (!users.length) {
        res.json({ message: "No users found." });
        return;
      }
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },

  //new user
  async newUser({ body }, res) {
    console.log("body =", body);
     try {
       const newUser = await User.create(body);
       console.log("newUser = ", newUser)
       if (!newUser) {
         res.status(503).json({ message: "User not created." });
       }
       res.json(newUser);
     } catch (error) {
       console.log(error);
       res.json(error);
     }
   },

  //get specific user by id - this could be used for getting a specific horse as well
  async getUserById({ params }, res) {
    try {
      const userData = await User.findOne({ _id: params.id })
        .populate('thoughts')
        .populate('friends')
        .select(["-_v", "-_id", "-email"]);
      if (!userData) {
        res.json({ message: "User not found." });
        return;
      }
      res.json(userData);
    } catch (error) {
      res.json(error);
    }
  },

  //delete a user 
  async deleteUser({ params }, res) {
    try {
      const userData = await User.findOneAndDelete(
        { _id: params.id },
        { new: true }
      );

      if (!userData) {
        res.json({ message: "User not found." })
      }

      res.json(userData);
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = userControllers;