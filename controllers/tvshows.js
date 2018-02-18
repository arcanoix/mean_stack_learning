var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
		if(err) res.send(500, err.message);

		console.log('GET /tvshows');
		res.status(200).jsonp(tvshows);
	});
};