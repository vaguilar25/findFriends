// ===============================================================================
// DATA
// Below data will hold all the aswers of the survey.
// Initially we just set it equal to a "dummy" answers.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Ahmed",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
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
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        name: "Louis T. Delia",
        photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        name: "Lou Ritter",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        name: "Jordan Biason",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        scores: [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        name: "asd",
        photo: "ASD",
        scores: [
            "3",
            "2",
            "3",
            "3",
            "1",
            "2",
            "3",
            "2",
            "4",
            "3"
        ]
    },
    {
        name: "joe dirty",
        photo: "https://thenypost.files.wordpress.com/2015/07/spade1.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        scores: [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "2",
            "2"
        ]
    },
    {
        name: "Ethan",
        photo: "https://www.beingjimdavis.com/assets/default/avatar_small-170afdc2be97fc6148b283083942d82c101d4c1061f6b28f87c8958b52664af9.jpg",
        scores: [
            "5",
            "5",
            "4",
            "2",
            "5",
            "2",
            "4",
            "1",
            "5",
            "3"
        ]
    }


];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
