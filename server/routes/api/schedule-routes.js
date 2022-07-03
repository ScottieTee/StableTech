const router = require('express').Router();

const { 
    getAllOwners, 
    addOwners, 
    getOwnerById, 
    deleteOwner,
    addDates, 
    updateDate, 
    deleteDate } = require('../../controllers/schedule');

router
.route('/')
.get(getAllOwners) 
.post(addOwners);

router
.route('/:owner')
.get(getOwnerById)
.delete(deleteOwner);

router
.route('/:owner/schedule')
.post(addDates)
.put(updateDate)
.delete(deleteDate);