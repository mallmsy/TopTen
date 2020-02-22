var mongoose = require('mongoose');

// Setup schema
var albumSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    albumImg: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Album model
var Album = module.exports = mongoose.model('Album', albumSchema);

// Instance variables
module.exports.get = function (callback, limit) {
    Album.find(callback).limit(limit);
}