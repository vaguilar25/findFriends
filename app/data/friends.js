// ===============================================================================
// DATA
// Below data will hold all the aswers of the survey.
// Initially we just set it equal to a "dummy" answers.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name:"Ahmed",
        photo:"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  