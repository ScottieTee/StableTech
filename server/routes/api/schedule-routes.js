const router = require('express').Router();

const { 
    getAllOwners, 
    addOwners, 
    getOwnerById, 
    addPhone, 
    deletePhone, 
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
.post(addPhone)
.delete(deletePhone);

router
.route('/:owner/schedule')
.post(addDates)
.put(updateDate)
.delete(deleteDate);