INSERT INTO users(username, name, email, password, picture) VALUES
('srose74', 'Sarah Rose', 'srose74@icloud.com', '$2b$10$7aFg.rtZnrz5ft7nhHQ53OSz9tZaEEpC6bT0hal9LVHHdCGU43Tve','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMIDRcUvaog9R2w5MzMNj6Ej4QG7KIDPSEA&usqp=CAU'),
('tcraft68', 'Tony Craft', 'anthony.craft@gmail.com', '$2b$10$07uDDcvcB99iA163hdRt7OJeEd1cKnRvV5TRE16LXYcaRp5Kguz2m','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxWrpJ0_-QfotgLA9WI80lPLXOFQGwX0pdrXor0EnKXud4aSB5bbLcvvIWQf0PTBnKsQ&usqp=CAU'),
('hcraft09', 'Holly Craft','holly.craft@gmail.com', '$2b$10$Fdqiy./MfwVtpveEnLKkN.JoQuPq3QYez.kOYrOIaymH7kD8LNFCK','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyNXUL2IYq7hI8TnNUDPcSURFrWtiFCi98g&usqp=CAU'),
('ileonard04', 'Izzy Leonard', 'kim.bloomer@gmail.com', '$2b$10$b1vnW40F/V8LqrFfPDYuNeJ8pQUVeDQY9BKZmM3imgJrTcY1TBEKO','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkeDvTnbRaix0Kb3L8fk7i38dF_NiktQFa5oiEDHyMeva4B-wG3PoiXjNwgGZVKynsUA&usqp=CAU'),
('hleonard00', 'Harry Leonard', 'harry.leonard@gmail.com', '$2b$10$E8zNWjJP6fKAeWgQQzT1Eu9qYGOzPZNXmSBLlKCFKeBLS.eCO1qr6','https://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/funny-yearbook-photos-poodle-hair.jpg'),
('jwright76', 'Jen Wright', 'jen.wright@gmail.com', '$2b$10$E8zNWjJP6fKAeWgQQzT1Eu9qYGOzPZNXmSBLlKCFKeBLS.eCO1qr6','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eDAxz7of8FxpeYsJBa6O212XI39LycbqSQ&usqp=CAU'),
('lblake74', 'Lee Blake', 'lee.blake@gmail.com', '$2b$10$E8zNWjJP6fKAeWgQQzT1Eu9qYGOzPZNXmSBLlKCFKeBLS.eCO1qr6','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMIDRcUvaog9R2w5MzMNj6Ej4QG7KIDPSEA&usqp=CAU');

INSERT INTO events(event_type) VALUES
('Birthday'),
('Anniversary'),
('Christmas'),
('Wedding'),
('New Baby'),
('Graduation'),
('Gratitude'),
('Housewarming'),
('Other');

INSERT INTO relation(relation_type) VALUES
('Mother'),
('Father'),
('Partner'),
('Husband'),
('Wife'),
('Daughter'),
('Son'),
('Grandparent'),
('Auntie'),
('Uncle'),
('Nephew'),
('Niece'),
('Friend'),
('Sister'),
('Other');

INSERT INTO relationship (gift_giver, gift_receiver, relation_id) VALUES
(1, 2, 4),
(1, 3, 6),
(1, 4, 6),
(1, 5, 7),
(1, 6, 13),
(1, 7, 14);

INSERT INTO dates (event_id, relationship_id, event_date) VALUES
(1, 1, '1968-11-24'),
(2, 1, '2009-02-19'),
(1, 2, '2009-09-28'),
(1, 3, '2004-03-09'),
(1, 4, '2000-11-17'),
(1, 5, '1976-04-19'),
(1, 6, '1974-10-08');

INSERT INTO gifts (relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating ) VALUES
(1, 1, 'Shimano Fishing Rod 7','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC0pMRenhE5KBUF5lgRACvdU7ApIzzJl6x384sBxonz25Pasx4xnZPZuyk5wO_jLjVFb-SRPB5BSs&usqp=CAc', '2022-11-23', 'PENDING', 0);
  