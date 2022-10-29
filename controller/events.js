const db = require('../database/db.js')
const express = require('express');
const router = express.Router();

//GET APIs -------------------->

//this route is for testing purposes
router.get("/api/test", (req, res) => {
    res.json({ result: "success" });
  });

//this route gets a list of gift_receivers for a particular gift_giver
//RETURNS ----------->
//users_id, name, email, password, picture, relationship_id
//gift_giver, gift_receiver, relation_id, relation_type 
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

//this route gets a given gift_receiver based on a user_id
//RETURNS ----------->
//users_id, name, email, password, picture, relationship_id
//gift_giver, gift_receiver, relation_id, relation_type 
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


//this route gets all event_types based on a event_id
//RETURNS ----------->
//event_type
router.get('/api/event-types', (req, res) => {
    sql=`SELECT * FROM events`;

    db.query(sql).then((dbRes)=> {
      return res.json(dbRes.rows);
    });  
})

//this route gets gifts for a particular relationship_id
//RETURNS ----------->
//gift_id, relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating, event_type
router.get('/api/gifts/:relationship_id', (req,res) => {
    const relationship_id = req.params.relationship_id;

    sql = `SELECT * FROM gifts
           INNER JOIN events on gifts.event_id = events.event_id
           WHERE gifts.relationship_id = $1`;
    
    db.query(sql, [relationship_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
    });       
})

//this route gets events for a particular gift_receiver (as identified by a relationship_id)
//RETURNS ----------->
//date_id, event_id, relationship_id, event_date, event_type
router.get('/api/events/:relationship_id', (req, res) => {
  const relationship_id = req.params.relationship_id;

  sql = `SELECT * FROM dates 
         INNER JOIN events ON dates.event_id = events.event_id 
         WHERE dates.relationship_id = $1`;

  db.query(sql, [relationship_id]).then((dbRes)=> {
    return res.json(dbRes.rows);
  });
})

//POST APIs -------------------->

router.post('/api/event', (req,res) => {
  const { event_id, relationship_id, event_date } = req.body;

  const sql = `
      INSERT INTO dates (event_id, relationship_id, event_date)
      VALUES ($1, $2, $3)
      `;

      db.query(sql, [event_id, relationship_id, event_date]).then((dbRes) => {
        console.log("API-event-updated")
        res.sendStatus(200); //everything is okay 

      }).catch((err) => {
        res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
      });        
});

module.exports = router;
