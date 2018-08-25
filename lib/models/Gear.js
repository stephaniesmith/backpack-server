const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString, RequiredNumber } = require('../util/mongoose-helpers');

const schema = new Schema({
    name: RequiredString,
    brand: String,
    type: {
        ...RequiredString,
        enum: ['footwear', 'backpack', 'clothes', 'cookware', 'sleep system', 'shelter', 'water system', 'first-aid', 'safety']
    },
    weight: RequiredNumber

});

module.exports = mongoose.model('Gear', schema);