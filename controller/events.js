const db = require('../database/db.js')
const express = require('express');
const router = express.Router();

//this route is for testing purposes
router.get("/api/test", (req, res) => {
    res.json({ result: "success" });
  });

//this route gets a list of relations  
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

//this route gets a single relation's details
router.get('/api/relationsDetails/:id', (req, res) => {
    const relation_id = req.params.id;

    sql = `SELECT * FROM users
           INNER JOIN relationship ON users.users_id = relationship.gift_receiver
           INNER JOIN relation ON relationship.relation_id = relation.relation_id
           WHERE users.users_id = $1`;

    db.query(sql, [relation_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
  });
})

router.get('/api/gifts/:relationship_id', (req,res) => {
    const relationship_id = req.params.relationship_id;

    sql = `SELECT * FROM gifts
           WHERE gifts.relationship_id = $1`;
    
    db.query(sql, [relationship_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
    });       
})


module.exports = router;
