// var db = require("/models/");

var express = require ("express");

var router = express.Router();
var burger = require("../models/models.js");


    // Load burger List page
    router.get("/", function (req, res) {
        console.log('in router.get "/"');
        burger.selectAll(function(burger_data) {

                        // Render the page to handlebars (homepage with burgers from db)
            res.render("index", {
                msg: "Welcome!",
                burgers: burger_data
            });
        })

            
    });

    // router.post("/burgers/new", function(req, res) {
    //     burger.create(req.body.burger_name, function(result) {
          
    //       console.log(result);
    //       res.redirect("/");
    //     });
    //   });

      

    
//     // Load Team Lobby page and pass in an team by id
//     app.get("/teamData/:id", function (req, res) {
//         db.TeamData.findOne({ where: { id: req.params.id } }).then(function (dbTeamData) {
//             // Render the page to handlebars (teamLobby.handlebars)
//             res.render("teamLobby", {
//                 teamData: dbTeamData,
//             });
//         });
//     });

//     app.get('/signup', authController.signup);

//     app.get('/signin', authController.signin);

//     app.post('/signup', passport.authenticate('local-signup', {
//         successRedirect: '/',
//         failureRedirect: '/signup'
//     }
//     ));

//     // app.get('/dashboard', isLoggedIn, authController.dashboard);

//     app.get('/logout', authController.logout);

//     app.post('/signin', passport.authenticate('local-signin', {
//         successRedirect: '/',
//         failureRedirect: '/signin'
//     }));

//     //routing for players page
//     app.get("/teamData/teamData/:player", function (req, res) {
//         // db.TeamData.findOne({ where: { player: req.user.firstname } })
//         res.render('players');
//     }
// )

    // Render 404 page for any unmatched routes
    // router.get("*", function (req, res) {
    //     res.render("404");
    // });

//     function isLoggedIn(req, res, next) {
//         if (req.isAuthenticated())
//             return next();
//         res.redirect('/signin');
//     }
// }}

module.exports = router;