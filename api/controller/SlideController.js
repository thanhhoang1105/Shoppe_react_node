const Slide = require('../models/SlideModel')
const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const cloudinary = require('cloudinary')

//get All Slides
exports.getAllSlides = catchAsyncErrors(async (req, res, next) => {
    const slides = await Slide.find()

    res.status(200).json({
        status: 'success',
        slides
    })
})

//create Slide --> Admin
exports.createSlide = catchAsyncErrors(async (req, res, next) => {
    const { name, description, title, image } = req.body

    if (image) {
    }
    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: 'slides',
        width: 150,
        crop: 'scale'
    })

    const slide = await Slide.create({
        name,
        description,
        title,
        image: {
            public_id: myCloud.public_id,
            url: myCloud.url
        }
    })

    res.status(200).json({
        status: 'success',
        slide
    })
})

//Update Slide --> Admin
exports.updateSlide = catchAsyncErrors(async (req, res, next) => {
    let slide = await Slide.findById(req.params.id)
    if (!slide) {
        return next(new ErrorHandler('Slide is not found with this id', 404))
    }

    let images = []

    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    if (images !== undefined) {
        //delete old images
        for (let i = 0; i < slide.images.length; i++) {
            await cloudinary.v2.uploader.destroy(slide.images[i].public_id)
        }

        //upload new images
        const imagesLinks = []

        for (let i = 0; i < images.length; i++) {
            const myCloud = await cloudinary.v2.uploader.upload(images[i], {
                folder: 'slides',
                width: 150,
                crop: 'scale'
            })
            imagesLinks.push({
                public_id: myCloud.public_id,
                url: myCloud.url
            })
        }
        req.body.images = imagesLinks
    }

    slide = await Slide.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false
    })

    res.status(200).json({
        success: true,
        slide
    })
})

//Delete Slide --> Admin
exports.deleteSlide = catchAsyncErrors(async (req, res, next) => {
    let slide = await Slide.findById(req.params.id)
    if (!slide) {
        return next(new ErrorHandler('Slide is not found with this id', 404))
    }

    for (let i = 0; i < slide.images.length; i++) {
        await cloudinary.v2.uploader.destroy(slide.images[i].public_id)
    }

    await Slide.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: 'Slide deleted'
    })
})
