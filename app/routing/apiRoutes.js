var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.send(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the Friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

   
    console.log(req.body.name);


    
    var bestMatch = [];
    for (var i = 0; i < friendsData.length; i++) {
      var scoreFriends = friendsData[i].scores;
     
      var dif = 0;
      if (req.body.name != friendsData[i].name) {
        for (var j = 0; j < friendsData[i].scores.length; j++) {
          dif += Math.abs(req.body.scores[j] - friendsData[i].scores[j]);
        }
      }
      if (bestMatch = []) {
        bestMatch = [friendsData[i].name, friendsData[i].photo, dif]
      }
      else if (dif < bestMatch[2]) {
        bestMatch = [friendsData[i].name, friendsData[i].photo, dif]
      }

    
    }
    console.log(bestMatch);
    console.log("the best match is: ", bestMatch[0])
    friendsData.push(req.body);

    //here return data for the modal
   res.json(bestMatch);



});

}

