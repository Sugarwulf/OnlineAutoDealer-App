import express = require('express');
let router = express.Router();

let makes = [
  {id:1, name:'BMW'},
  {id:2, name:'Tesla'},
  {id:3, name:'Mini Cooper'}
];

/* GET all makes */
router.get('/makes', function(req, res, next) {
  res.json(makes);
});

router.get('/makes/search/:search', function(req, res, next) {
    let search = req.params['search'];
    let matches = makes.filter((makes)=>{
      return makes.name.indexOf(search) == 0;
   //I filtered the results on the server side code versus on the client side. 
      // return makes.name.indexOf(search) == 0;
    }


);
    res.json(matches);
});

export = router;
