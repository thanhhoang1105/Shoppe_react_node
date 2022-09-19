const express = require('express')
const {
    getAllSlides,
    createSlide,
    updateSlide,
    deleteSlide
} = require('../controller/SlideController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

router.route('/slides').get(isAuthenticatedUser, getAllSlides)

router
    .route('/admin/slide/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), createSlide)

router
    .route('/admin/slide/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateSlide)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteSlide)

module.exports = router
