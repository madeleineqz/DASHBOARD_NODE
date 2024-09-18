const express = require('express')
const {vistaPrincipal, vistaTables, vistaNotifications, vistaUsuarios} = require('../controllers/PageControllers')
const router = express.Router()

router.get('/',vistaPrincipal)
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)
router.get('/user',vistaUsuarios)

module.exports = {routes: router}