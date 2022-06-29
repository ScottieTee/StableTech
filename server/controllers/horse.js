const Horse = require("../models/horses");
const User = require("../models/users");

const horseControllers = {
    //get all horses 
    async totalHorses(req, res) {
      try {
        const horses = await Horse.find({});
        if (!horses.length) {
          res.json({ message: "No horses found." });
          return;
        }
        res.json(horses);
      } catch (error) {
        res.json(error);
      }
    },

    //new horse
    async newHorse({ body }, res) {
      console.log("body =", body);
       try {
         const newHorse = await Horse.create(body);
         console.log("newHorse = ", newHorse)
         if (!newHorse) {
           res.status(503).json({ message: "Horse not created." });
         }
         res.json(newHorse);
       } catch (error) {
         console.log(error);
         res.json(error);
       }
     },

    //get specific horse by id - this can be used to edit I believe
    async getHorseById({ params }, res) {
      try {
        const horseData = await Horse.findOne({ _id: params.id })
          .populate('thoughts') //need to edit this
          .populate('friends')
          .select(["-_v", "-_id", "-email"]);
        if (!horseData) {
          res.json({ message: "Horse not found." });
          return;
        }
        res.json(horseData);
      } catch (error) {
        res.json(error);
      }
    },

    //update a horse
    async updateHorse({ params, body }, res) {
      try {
        const horseData = await User.findOneAndUpdate({ _id: params.id }, body, {
          new: true,
        });
        res.json(horseData);
      } catch (error) {
        res.json(error);
      }
    },

    //delete a horse 
    async deleteHorse({ params }, res) {
      try {
        const horseData = await Horse.findOneAndDelete(
          { _id: params.id },
          { new: true }
        );

        if (!horseData) {
          res.json({ message: "Horse not found." })
        }

        res.json(horseData);
      } catch (error) {
        res.json(error);
      };
    },
  };

  module.exports = horseControllers;