require("dotenv").config();




var keys = require("./keys.js");
var axios = require("axios");

var fs = require("fs");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify); 

var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

var OMDBkey=keys.OMDB.id;
var OMDBurl= "http://www.omdbapi.com/?apikey="+ OMDBkey+ "&t= "+ search +" &y=&plot=short";


function liriRun(command , search){
    switch(command){
        case "spotify-this-song":
            RunStopify(search);
            break;


            case "movie-this":
                OMDB(search);
                break;
    }
}













function RunStopify(){
   
    spotify.search({ 
        type: "track", 
        query: search  }),function (err, data) {
            if (err){
                return console.log("errorrrrr"+ err)
            };

        }

        spotify.search({ 
            type: "track", 
            query: search  }), function(err,data){


            console.log("Song Name" + data.tracks.items[0].name);
            console.log("Artist Name" + data.tracks[0].artist.name);
            console.log("Album Name" +data.tracks.items[0].album.name)
            console.log("Preview URL" + data.tracks.items[0].preview_url);
        


        fs.appendFileSync("log.txt" + "Song Name" + data.tracks.items[0].name+ "utf8");
        fs.appendFileSync("log.txt"+ "Artist Name" + data.tracks[0].artist.name+"utf8" );
        fs.appendFileSync("log.txt"+ "Album Name" +data.tracks.items[0].album.name+ "utf8");
        fs.appendFileSync("log.txt"+"Preview URL" + data.tracks.items[0].preview_url+ "utf8");

            }
}



function OMDB(){

    if (!search){
        console.log("Search again")
        console.log="Mr.Nobody"
    }

    axios.get(OMDBurl).then(
        function(reponse){
            console.log("Movie Title"+reponse.data.Title);
            console.log("Year"+reponse.data.Year);
            console.log("IMDB Rating"+reponse.data.imdbRating)
            console.log("Rotten Tomatoes"+reponse.data.Rating[1].Value);
            console.log("Country"+reponse.data.Country);
            console.log("Lanuage"+reponse.data.Language);
            console.log("Plot"+reponse.data.Plot);
            console.log("Actors"+ reponse.data.Actors);


            fs.appendFileSync("log.txt" + "Year" + response.data.Year+ "utf8");
            fs.appendFileSync("log.txt" + "IMDB Rating" + response.data.imdbRating+ "utf8");
            fs.appendFileSync("log.txt" + "Rotten Tomatoes" + response.data.Rating[1].Value+ "utf8");
            fs.appendFileSync("log.txt" + "Song Name" + response.data.Country+ "utf8");
            fs.appendFileSync("log.txt" + "Song Name" + response.data.Language+ "utf8");
            fs.appendFileSync("log.txt" + "Song Name" + response.data.Plot+ "utf8");
            fs.appendFileSync("log.txt" + "Song Name" + response.data.Actors+ "utf8");
    

        })
    };



