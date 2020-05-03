const { Router } = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const studentController = require('./student.ctrl');

// GraphQL schema
var schema = buildSchema(`
    scalar Date
    , input inputSearch {
        _id: String,
        firstName: String,
        lastName: String, 
        registrationNumber: Int, 
        email: String,
    }

    input inputStudent {
        firstName: String,
        lastName: String, 
        registrationNumber: Int, 
        email: String,
    }
    
    type Student {        
        _id: String,
        firstName: String, 
        lastName: String, 
        registrationNumber: Int, 
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
        find(input: inputSearch!): [Student]
        findOne(input: inputSearch!): Student
    }  
    
    type Mutation {
        create (input: inputStudent!): Student!
        update (_id: String!, input: inputStudent!): mutationResult!
        delete (_id: String!): mutationResult!
      }
`);

// Root resolver
var root = {
    find: studentController.find,
    findOne: studentController.findOne,    
    create: studentController.createOne,
    update: studentController.updateOne,
    delete: studentController.deleteOne
};

const router = Router();
router.use('/api/v1/student', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  }));

module.exports = router;
