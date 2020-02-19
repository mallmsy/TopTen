// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to TopTen crafted with love!'
    });
});

// Import album controller
var albumController = require('./albumController');

// Contact routes
router.route('/albums')
    .get(albumController.index)
    .post(albumController.new);
router.route('/albums/:album_id')
    .get(albumController.view)
    .patch(albumController.update)
    .put(albumController.update)
    .delete(albumController.delete);

    // Export API routes
module.exports = router;