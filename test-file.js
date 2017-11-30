var router = express.Router();

var leaderboard = require('../public/leaderboard.json');

router.get('/all', function (req, res) {
  console.log(leaderboard.length);
  return res.json(leaderboard);
});

router.get('/stud/:rank', function (req, res) {
  if(leaderboard[req.params.rank]){
    return res.json(leaderboard[req.params.rank]);
  }
  return res.status(404).json({
    message: 'not found',
    error: true,
  });
});

router.post('/stud', function (req, res) {
  if(!req.body.Name || !req.body.College){
    return res.json({
      message: 'not formatted properly',
      error: true,
      data: req.body
    });
  }
  var stud = req.body;
  leaderboard.push(stud);
  return res.json({
    message: 'Success!',
    error: false
  });
});

router.delete('/stud/:rank', function (req, res) {
  if(leaderboard[req.params.rank]){
    console.log('Deleting - ' + leaderboard[req.params.rank].Name);
    leaderboard.pop(req.params.rank);
    return res.json({
      message: 'Success!',
      error: false
    });
  }
  return res.status(404).json({
    message: 'not found',
    error: true,
  });
});