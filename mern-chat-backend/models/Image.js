const mongoose = require('mongoose');

const ImageSchema = mongoose.model({
    name:{
        type: 'string',
        required: true,
    },
    Image:{
        data:Buffer,
        contentType: String,

    }
})


const ImageModel = mongoose.model('ImageModel',ImageSchema)

module.exports = ImageModel