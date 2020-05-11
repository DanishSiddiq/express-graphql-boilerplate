const { Router } = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const lecturerController = require('./lecturer.ctrl');

// GraphQL schema
const schema = buildSchema(`
    scalar Date
    , input SearchInput {
        _id: String,
        firstName: String,
        lastName: String, 
        serviceNumber: Int, 
        email: String,
    }

    input LecturerInput {
        firstName: String,
        lastName: String, 
        serviceNumber: Int, 
        email: String,
    }
    
    type Lecturer {        
        _id: ID,
        firstName: String, 
        lastName: String, 
        serviceNumber: Int, 
        email: String,
        createdAt: Date,
        updatedAt: Date
    }        

    type mutationResult 
    { 
        code: Int!,
        msg: String! 
    }
    
    type Query {
        find(input: SearchInput!): [Lecturer]
        findOne(input: SearchInput!): Lecturer
    }  
    
    type Mutation {
        create (input: LecturerInput!): Lecturer!
        update (_id: String!, input: LecturerInput!): mutationResult!
        delete (_id: String!): mutationResult!
      }
`);

// Root resolver
const root = {
    find: lecturerController.find,
    findOne: lecturerController.findOne,
    create: lecturerController.createOne,
    update: lecturerController.updateOne,
    delete: lecturerController.deleteOne
};

// router
const router = Router();
router.use('/api/v1/lecturer', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

module.exports = router;
