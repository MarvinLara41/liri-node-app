console.log('this is loaded');

exports.Spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};



// Spotify API Start



var Spotify = require('node-spotify-api');
 
exports.spotify=({
  id: b92f36d9323a439a9ea814421ab8e262,
  secret: "4ebc4b6b13164f4f9da47c2ceffb30b3",
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

//Spotify API stop.




var OMDB = new OMDB ({
  id: "4a2207d"
})





module.exports = liri;