var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.send(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the Friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
   
    
      friendsData.push(req.body);
   //   res.json(true);
  
    
  });
  
}