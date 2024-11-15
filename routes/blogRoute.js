const express = require('express')
const { auth } = require('../middleware/authMiddleware')
const { CreateBlogs, getBlogs } = require('../controllers/blogController')

const router = express.Router()


router.get('/', getBlogs)


router.post('/',auth,CreateBlogs)

module.exports = router