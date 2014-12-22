"use strict";

var mongoose = require('mongoose'),
    collectionName = 'comments',
    schema,
    model;

if (mongoose.modelNames().indexOf(collectionName) == -1)
{
    schema = new mongoose.Schema(
        {
            publicationId: { type: mongoose.Schema.ObjectId, required: true },
            userId : { type: mongoose.Schema.ObjectId, required: true },
            content : { type : String, required : true },
            ticks : { type : Number, required : true }
        },
        {
            collection : collectionName
        }
    );

    model = mongoose.model(collectionName, schema);
}
else
{
    model = mongoose.model(collectionName);
}

module.exports = model;