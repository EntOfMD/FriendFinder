const friends = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        console.log(friends);
        res.json(friends);
    });

    app.post('/api/survey', (req, res) => {
        friends.push(req.body);
        res.json(`${res.body} is added to the list`);
    });
};
