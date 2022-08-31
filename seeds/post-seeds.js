const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        comment: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user: 'Lernantino',
        created_at: '5/8/2020'
    },
    {
        title: 'Authentication vs. Authorization',
        comment: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system',
        user: 'Xandromus',
        created_at: '5/8/2020'
    },
    {
        title: 'Object-Relational Mapping',
        comment: "I have really lvoed learning about ORMs. It's really simplified the way I create queries in SQL!",
        user: 'Lernantino',
        created_at: '5/8/2020'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;