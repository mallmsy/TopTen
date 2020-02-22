// Import albums model
Album = require('./albumModel');

// Handle index actions
exports.index = function (req, res) {
    Album.get(function (err, albums) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "albums retrieved successfully",
            data: albums
        });
    });
};

// Handle create album actions
exports.new = function (req, res) {
    console.log("REQUEST....\n///////////////////", req.body, "RESPONSE....\n///////////////////", res)
    var album = new Album();
    album.title = req.body.title ? req.body.title : album.title;
    album.artist = req.body.artist;
    album.albumImg = req.body.albumImg;

// save the album and check for errors
    album.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New album created!',
            data: album
        });
    });
};

// Handle view album info
exports.view = function (req, res) {
    Album.findById(req.params.album_id, function (err, album) {
        if (err)
            res.send(err);
        res.json({
            message: 'Album details loading..',
            data: album
        });
    });
};
// Handle update album info
exports.update = function (req, res) {
Album.findById(req.params.album_id, function (err, album) {
        if (err)
            res.send(err);
album.name = req.body.name ? req.body.name : album.name;
        album.title = req.body.title;
        album.artist = req.body.artist;
        album.albumImg = req.body.albumImg;

        // save the album and check for errors
        album.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Album Info updated',
                data: album
            });
        });
    });
};

// Handle delete album
exports.delete = function (req, res) {
    Album.remove({
        _id: req.params.album_id
    }, function (err, album) {
        if (err)
            res.send(err);
    res.json({
            status: "success",
            message: 'Album deleted'
        });
    });
};