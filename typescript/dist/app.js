var message = "Help me!";
console.log(message);
var episode = 4;
console.log("This is episode: " + 4);
episode = episode + 1;
console.log("Next episode: " + episode);
var favoriteOS;
favoriteOS = "OSx";
console.log("My favorite OS is " + favoriteOS);
var milenioFalcon = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs " + (milenioFalcon(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy " + name + "?"); };
call('R2');
//# sourceMappingURL=app.js.map