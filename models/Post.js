// module.exports = Post;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('module');
const express = require('express');
const router = express.Router();

// create our Post model
class Post extends Model {
    constructor(user, post, comment) {
        console.log('Post constructor');
        this.user = user;
        this.post = post;
        this.comment = comment;

        // create a new post
        router.post('/', (req, res) => {



            try {
                const newPost =  Post.create({
                    title: req.body.title,
                    content: req.body.content,
                    user_id: req.session.user_id,
                });

                res.status(200).json(newPost);
            } catch (err) {
                res.status(400).json(err);
            }
        });

       };
}

module.exports = Post;
