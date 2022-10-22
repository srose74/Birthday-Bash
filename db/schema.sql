CREATE DATABASE birthday_bash_db;

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    username TEXT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT, 
    picture TEXT
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_type TEXT NOT NULL
);

CREATE TABLE presents (
    present_id SERIAL PRIMARY KEY,
    present_name TEXT NOT NULL,
    present_description TEXT NOT NULL,
    cost INTEGER,
    link TEXT
);

CREATE TABLE relation (
    relation_id SERIAL PRIMARY KEY,
    relation_type TEXT NOT NULL
);

CREATE TABLE relationship (
    relationship_id SERIAL PRIMARY KEY,
    gift_giver INTEGER REFERENCES users(users_id),
    gift_receiver INTEGER REFERENCES users(users_id),
    relation_id INTEGER REFERENCES relation(relation_id)
);

CREATE TABLE gifts (
    gift_id SERIAL PRIMARY KEY,
    relationship_id INTEGER REFERENCES relationship(relationship_id),
    event_id INTEGER REFERENCES events(event_id),
    present_id INTEGER REFERENCES presents(present_id),
    gift_date DATE,
    gift_status TEXT NOT NULL,
    CHECK (gift_status in ('PENDING', 'GIVEN', 'RATED'))
);

CREATE TABLE dates (
    date_id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(event_id),
    relationship_id INTEGER REFERENCES relationship(relationship_id),
    event_date DATE
);

CREATE TABLE rating (
    rating_id SERIAL PRIMARY KEY,
    gift_id INTEGER REFERENCES gifts(gift_id),
    rating INTEGER NOT NULL,
    CHECK (rating BETWEEN 1 AND 5)
);