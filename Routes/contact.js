const express = require ('express')
const contact = require('../models/contact')
const { AddContact, GetContact, DeleteContact, UpdateContact, GetOneContact } = require('../controllers/contact')


const contactRouter = express.Router()


contactRouter.post('/addContact',AddContact)


contactRouter.get('/getContact',GetContact)


contactRouter.delete('/deleteContact/:id',DeleteContact)
contactRouter.put('/updateContact/:id',UpdateContact)

contactRouter.get('/getOneContact/:id',GetOneContact)


module.exports = contactRouter 