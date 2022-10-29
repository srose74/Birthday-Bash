const db = require('../database/db.js')
const express = require('express');
const router = express.Router();

//this route is for testing purposes
router.get("/api/test", (req, res) => {
    res.json({ result: "success" });
  });

router.get('/api/relations', (req,res)=>{

    const userId = 1; 
    const sql=`SELECT * FROM users
               INNER JOIN relationship ON users.users_id = relationship.gift_receiver
               INNER JOIN relation ON relationship.relation_id = relation.relation_id
               WHERE relationship.gift_giver = $1; 
    `
    db.query(sql,[userId]).then((dbRes)=>{
      res.json(dbRes.rows);
    });
})


module.exports = router;
