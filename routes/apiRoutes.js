const friends = require('../data/friends');

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    if (!req.body) {
      console.log(`request was made, but couldn't find the body`);
      res.json(`request was made, but couldn't find the body`);
    } else {
      const user = req.body;
      const userScores = user.scores;

      var matchedUser,
        matchedImage,
        totalDifference = 9000;

      for (i = 0; i < friends.length; i++) {
        let difference = 0;
        for (n = 0; n < userScores.length; n++) {
          difference += Math.abs(friends[i].scores[n] - userScores[n]);
        }
        if (difference < totalDifference) {
          totalDifference = difference;
          matchedUser = friends[i].name;
          matchedImage = friends[i].photo;
          console.log(`You matched with ${matchedUser}!`);
        }
      }

      friends.push(user);
      res.json({
        msg: `${user.name} has been added!`,
        photo: matchedImage,
        name: matchedUser
      });
    }
  });
};
