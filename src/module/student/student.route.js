const { Router } = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const studentController = require('./student.ctrl');

// GraphQL schema
const schema = buildSchema(`
    scalar Date
    , input SearchInput {
        _id: String,
        firstName: String,
        lastName: String, 
        registrationNumber: Int, 
        email: String,
    }

    input StudentInput {
        firstName: String,
        lastName: String, 
        registrationNumber: Int, 
        email: String,
    }
    
    type Student {        
        _id: ID,
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
        find(input: SearchInput!): [Student]
        findOne(input: SearchInput!): Student
    }  
    
    type Mutation {
        create (input: StudentInput!): Student!
        update (_id: String!, input: StudentInput!): mutationResult!
        delete (_id: String!): mutationResult!
      }
`);

// Root resolver
const root = {
    find: studentController.find,
    findOne: studentController.findOne,    
    create: studentController.createOne,
    update: studentController.updateOne,
    delete: studentController.deleteOne
};

// router
const router = Router();
router.use('/api/v1/student', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  }));

module.exports = router;
