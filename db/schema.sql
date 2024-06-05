-- Drops database if it exists --
DROP DATABASE IF EXISTS techblog_db;

-- Creates database --
CREATE DATABASE techblog_db;

-- Uses the techblog_db database –
\c techblog_db;

-- Define the schema for the database
CREATE TABLE posts
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

Comments Table Schema:

CREATE TABLE comments
    comment_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(post_id)
