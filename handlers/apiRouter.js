const express = require('express');
const UserModel = require('../models/User.js');
const MovieModel = require('../models/Movie.js');
const BriefModel = require('../models/Brief.js');
const helper = require('./helpers.js');
const cors = require('cors');

const router = express.Router();

// retrieves user with specified id
router.get('/users/:id', cors(), (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         resp.json(data);
      }
   });

});

// retrieves all movies
router.get('/movies', cors(), (req, resp) => {
   MovieModel.find({}, (err, data) => {
      if (err) {
         resp.json({ message: 'Unable to connect to Movies' });
      } else {
         resp.json(data);
      }
   });
});

// retrieves movies with specified id
router.get('/movies/:id', cors(), (req, resp) => {
   MovieModel.find({ id: req.params.id }, (err, data) => {
      if (err || data.length === 0) {
         resp.json({ message: 'Movie not found' });
      } else {
         resp.json(data);
      }
   });
});

// retrieves all movies with specified substring/title
router.get('/find/title/:title', cors(), (req, resp) => {
   MovieModel.find({ 'title': new RegExp(req.params.title, 'i') }, (err, data) => {
      if (err || data.length === 0) {
         resp.json({ message: "No movie containing " + req.params.title });
      }
      else {
         resp.json(data);
      }
   })
})

// retrieves all movies between specified ratings
router.get('/find/rating/:r1/:r2', cors(), (req, resp) => {
   MovieModel.find().where('ratings.average')
      .gt(req.params.r1)
      .lt(req.params.r2)
      .exec(function (err, data) {
         if (err || data.length === 0) {
            resp.json({ message: "No movies within " + req.params.r1 + "and " + req.params.r2 });
         }
         else {
            resp.json(data);
         }
      })
})

// retrieves all movies between specified years
router.get('/find/year/:y1/:y2', cors(), (req, resp) => {
   MovieModel.find().where('release_date')
      .gt(req.params.y1)
      .lt(req.params.y2)
      .exec((err, data) => {
         if (err || data.length === 0) {
            resp.json({ message: "No movies found" });
         } else {
            resp.json(data);
         }
      });
})

// handle movie brief
router.get('/brief', cors(), (req, resp) => {
   BriefModel.find({}, function (err, data) {
      if (err || data.length === 0) {
         resp.json({ message: 'Unable to retrieve brief movies.' });
      }
      else {
         resp.json(data);
      }
   })
})


//get used favorites
router.get('/favorites/:id', cors(), (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         resp.json(data[0].favorites);
      }
   });
});


// posts a new favorite
router.post('/favorites/:id', cors(), (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {

      const userId = req.body.id;

      let index = _.findIndex(data[0].favorites, ['id', movieToAdd]);

      if (index < 0) {
         let newMovie = req.body;

         data[0].favorites.push(newMovie);

         resp.json(data[0].favorites);
      }
      else {
         resp.json(jsonMessage(`Movie ${movieToAdd} already exist! Cant add a new movie`));


      }
      //        if(err) {
      //            resp.json({ message: 'User not found'});
      //        } else {
      //            
      //            data[0].favorites.push(req.body);
      ////            resp.json(data[0].favorites);
      //        }
   });
});



// deletes a favorite
router.delete('/favorites/:id', helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      const movieToDelete = req.body.id;
      let index = _.findIndex(data[0].favorites, ['id', movieToDelete]);

      if (index < 0) {
         resp.json({ message: 'User not found' });
      } else {
         _.remove(data[0].favorites, _.find(data[0].favorites, ['id', movieToDelete]));

         resp.json(data[0].favorites);
      }
   });
})




module.exports = router;