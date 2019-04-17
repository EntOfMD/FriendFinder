const friends = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/survey', (req, res) => {
        if (!req.body) {
            console.log(`Can't find req.body`);
        } else {
            friends.push(req.body);
            res.json(`${req.body.name} was added to the list`);
        }
    });
};
