const router = require('express').Router();

const { getAllOwners, addOwners, getOwnerPhoneById, addPhone, deletePhone, getAllDates, addDates, updateDate, deleteDate } = require('../../controllers/horse');

router
.route('/')
.get(getAllOwners)
.post(addOwners);

router
.route('/:owner')
.get(getOwnerPhoneById)
.post(addPhone)
.delete(deletePhone);

router
.route('/:owner/schedule')
.post(addDates)
.put(updateDate)
.delete(deleteDate);