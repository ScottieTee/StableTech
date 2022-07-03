const { User, Schedule } = require('../models');

const scheduleController = {
    // get all owners
    async getAllOwners(req, res) {
        Schedule.find({})
        .populate({
            path: 'owners',
            select: '-__v'
        })
        .sort({ createdAt: -1 })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // add a owner  
    async addOwners({ body }, res) {
        console.log('body=', body);
        try {
            const addOwners = await Schedule.create(body);
            console.log('addOwners = ', addOwners)
            if (!addOwners) {
                res.status(404).json({ message: 'Owner not added . '});
            }
            res.json(addOwners);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },

    // get an owner by id
    async getOwnerById({ params }, res) {
        Schedule.findOne({ _id: params.ownerId })
        .populate({
            path: 'owners',
            select: '-__v'
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No owner found with this id! '});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },

    async deleteOwner({ params }, res) {
        try {
            const ownerData = await Schedule.findOneAndDelete(
                { _id: params.id },
                { new: true }
            );
            res.json(ownerData);
        } catch (error) {
            res.json(error);
        };
    },

    async addDates({ params, body }, res) {
        Schedule.findOneAndUpdate(
            { _id: params.ownerId },
            { $push: { dates: body } },
            { new: true, runValidators: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user was found with this id!'})
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    },

    async updateDate({ params, body }, res) { 
        Schedule.findOneAndUpdate(
            { _id: params.ownerId},
            body,
            { new: true, runValidators: true}
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No date found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    async deleteDate({ params }, res) {
        Schedule.findOneAndUpdate(
            {_id: params.thoughtId },
            { $pull: { dates: {datesId: params.datesId } } },
            { new: true }
        )
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.json(err));
    },
};

module.exports = scheduleController;