const mongoose = require('mongoose')
const validator = require('validator')

const slideSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for your slide']
    },
    description: {
        type: String,
        required: [true, 'Please add a description for your slide']
    },
    title: {
        type: String,
        required: [true, 'Please add a title for your slide']
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
        //   required: true
    }
})

module.exports = mongoose.model('Slide', slideSchema)
